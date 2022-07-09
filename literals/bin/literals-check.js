/* eslint-disable no-console */
const { readdirSync } = require('fs')
const { join } = require('path')

const DEFAULT_LOCALE = 'es'

const DICTIONARIES_PATH = join(__dirname, '..', 'src')

const getFlatDictionary = (namespace, dictionary, parentKey) => {
  return Object.keys(dictionary).reduce((acc, key) => {
    const value = dictionary[key]
    const literalKey = parentKey ? `${parentKey}.${key}` : key

    return typeof value === 'string'
      ? { ...acc, [`${namespace}:${literalKey}`]: value }
      : { ...acc, ...getFlatDictionary(namespace, value, literalKey) }
  }, {})
}

const getAllLocalesDictionaries = ({ folders }) => {
  return folders.reduce((acc, folderName) => {
    const localePath = join(DICTIONARIES_PATH, folderName)

    const localeDictionary = readdirSync(localePath).reduce(
      (dictionaries, fileName) => {
        if (!fileName.includes('.json')) return dictionaries

        const [namespace] = fileName.split('.')
        const dictionary = require(join(localePath, fileName))

        return {
          [folderName]: {
            ...dictionaries[folderName],
            ...getFlatDictionary(namespace, dictionary),
          },
        }
      },
      {}
    )

    return { ...acc, ...localeDictionary }
  }, {})
}

const getDictionaries = () => {
  const folders = readdirSync(DICTIONARIES_PATH).filter(
    (file) => !file.match(/\.[0-9a-z]+$/i)
  )

  return getAllLocalesDictionaries({ folders })
}

const dictionaries = getDictionaries()

const dictionarylocales = Object.keys(dictionaries)

const baseDictionaryKeys = Object.keys(dictionaries[DEFAULT_LOCALE])

const totalDictionaryKeys = dictionarylocales.map((locale) => ({
  locale,
  value: Object.keys(dictionaries[locale])?.length,
}))

const totalDictionarySizeKeys = Object.values(totalDictionaryKeys).reduce(
  (prev, { value }) => prev + value,
  0
)

const dictionarySizeInfo = Object.values(totalDictionaryKeys)
  .map(({ locale, value }) => `'${locale}': ${value} keys`)
  .join(' | ')

const areConsistents = dictionarylocales.reduce((areConsistents, locale) => {
  const isConsistent = baseDictionaryKeys.reduce((isConsistent, literal) => {
    if (!dictionaries[locale][literal]) {
      console.log(
        '\x1b[33m%s\x1b[0m',
        'warn ',
        `- '${locale}' literal not found: "${literal}`
      )
    }

    return isConsistent && !!dictionaries[locale][literal]
  }, true)

  return areConsistents && isConsistent
}, true)

if (!areConsistents) {
  console.log(
    '\n\x1b[31m%s\x1b[0m',
    'error',
    '- Dictionaries are not consistent! Fix the problem with literals.\n'
  )
  process.exit(-1)
} else {
  console.log('\x1b[32m%s\x1b[0m', 'info ', `- Dictionaries are consistent!`)
  console.log(
    '\x1b[32m%s\x1b[0m',
    'info ',
    `- Dictionaries have a total of ${totalDictionarySizeKeys} keys. Locales ${dictionarySizeInfo}.\n`
  )
}
