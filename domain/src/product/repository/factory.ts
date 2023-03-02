import HttpProductRepository from './HttpProductRepository'

export const httpProductRepository = ({ config }) => {
  return new HttpProductRepository({ config, fetcher: fetch })
}
