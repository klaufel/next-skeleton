#!/usr/bin/env node
import fs from 'fs'

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const templateReact = `import styles from './%{componentName}.module.css'

type %{componentNameCapitalized}Props = {
  children?: React.ReactNode;
}

export default function %{componentNameCapitalized}({ children, ...props }: %{componentNameCapitalized}Props) {
  return <div className={styles.%{componentNameCapitalized}} {...props}>{children}</div>
}\n`

const templateCSS = `.%{componentNameCapitalized} {
  /* Write your magic! 🪄 */
  display: flex;
}\n`

const templateTest = `import { render, screen } from '@testing-library/react';
import %{componentNameCapitalized} from './index';

describe('%{componentNameCapitalized} component', () => {
  it('should display a "start testing" into component', () => {
    render(<%{componentNameCapitalized} />);

    const element = screen.getByText(/start testing/i)
    expect(element).toBeInTheDocument();
  });
});\n`

const templatesDictionary = {
  css: templateCSS,
  react: templateReact,
  test: templateTest,
}

const getTemplate = (template, {componentName, componentNameCapitalized}) => {
  return templatesDictionary[template]
    .replaceAll('%{componentName}', componentName)
    .replaceAll('%{componentNameCapitalized}', componentNameCapitalized)
}

const componentName = 'modal'
const componentNameCapitalized = capitalize(componentName)

const componentPath = `test/${componentName}`

const pathReact = `${componentPath}/index.tsx`
const pathCSS = `${componentPath}/${componentNameCapitalized}.module.css`
const pathTest = `${componentPath}/index.test.tsx`

const templates = {
  react: getTemplate('react', {componentName, componentNameCapitalized}),
  css: getTemplate('css', {componentName, componentNameCapitalized}),
  test: getTemplate('test', {componentName, componentNameCapitalized}),
}

fs.promises.mkdir(componentPath, { recursive: true }).then(() => {
  Promise.all([
    fs.promises.writeFile(pathReact, templates.react),
    fs.promises.writeFile(pathCSS, templates.css),
    fs.promises.writeFile(pathTest, templates.test)
  ]).then(() => {
    console.log('\x1b[32m%s\x1b[0m', `✔︎ Component ${componentName} files generated!`
  )})
  .catch(error => {  
    if (error) throw new Error(`\x1b[31m\n\n❌ ${err}\n\n`)
  });
}).catch(console.error);

