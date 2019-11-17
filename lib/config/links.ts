import componentExplorerHtml from '../html/component-explorer.html'
import exitEarlyFromIfHtml from '../html/exit-early-from-if.html'
import interfacesHtml from '../html/interfaces.html'
import lintersHtml from '../html/linters.html'
import namingBooleanVariablesHtml from '../html/naming-boolean-variables.html'
import namingFilesHtml from '../html/naming-files.html'
import shortCircuitsHtml from '../html/short-circuits.html'
import shorthandFragmentSyntaxHtml from '../html/shorthand-fragment-syntax.html'
import yarnVersionHtml from '../html/yarn-version.html'
import reactCraftHtml from '../html/react-craft.html'

interface LinkConfig {
  url: string
  title: string
  html?: string
}

export const home: LinkConfig = {
  url: '/',
  title: 'React Craft',
  html: reactCraftHtml,
}

export const links: LinkConfig[] = [
  {
    url: '/interfaces',
    title: 'Interfaces',
    html: interfacesHtml,
  },
  {
    url: '/component-explorer',
    title: 'Component explorer',
    html: componentExplorerHtml,
  },
  {
    url: '/exit-early-from-if',
    title: 'Exit early from if',
    html: exitEarlyFromIfHtml,
  },
  {
    url: '/linters',
    title: 'Linters',
    html: lintersHtml,
  },
  {
    url: '/naming-boolean-variables',
    title: 'Naming boolean variables',
    html: namingBooleanVariablesHtml,
  },
  {
    url: '/naming-files',
    title: 'Naming files',
    html: namingFilesHtml,
  },
  {
    url: '/short-circuits',
    title: 'Short circuits',
    html: shortCircuitsHtml,
  },
  {
    url: '/shorthand-fragment-syntax',
    title: 'Shorthand fragment syntax',
    html: shorthandFragmentSyntaxHtml,
  },
  {
    url: '/yarn-version',
    title: 'Yarn version',
    html: yarnVersionHtml,
  },
]
