import {
  componentExplorerDoc,
  exitEarlyFromIfDoc,
  interfacesDoc,
  lintersDoc,
  namingBooleanVariablesDoc,
  namingFilesDoc,
  shortCircuitsDoc,
  shorthandFragmentSyntaxDoc,
  yarnVersionDoc,
} from '../docs'

interface LinkConfig {
  url: string
  title: string
  text?: string
}

export const links: LinkConfig[] = [
  {
    url: '/interfaces',
    title: 'Interfaces',
    text: interfacesDoc,
  },
  {
    url: '/component-explorer',
    title: 'Component explorer',
    text: componentExplorerDoc,
  },
  {
    url: '/exit-early-from-if',
    title: 'Exit early from if',
    text: exitEarlyFromIfDoc,
  },
  {
    url: '/linters',
    title: 'Linters',
    text: lintersDoc,
  },
  {
    url: '/naming-boolean-variables',
    title: 'Naming boolean variables',
    text: namingBooleanVariablesDoc,
  },
  {
    url: '/naming-files',
    title: 'Naming files',
    text: namingFilesDoc,
  },
  {
    url: '/short-circuits',
    title: 'Short circuits',
    text: shortCircuitsDoc,
  },
  {
    url: '/shorthand-fragment-syntax',
    title: 'Shorthand fragment syntax',
    text: shorthandFragmentSyntaxDoc,
  },
  {
    url: '/yarn-version',
    title: 'Yarn version',
    text: yarnVersionDoc,
  },
]
