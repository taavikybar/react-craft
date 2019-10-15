import componentExplorerHtml from '../md/component-explorer.html'
import exitEarlyFromIfHtml from '../md/exit-early-from-if.html'
import interfacesHtml from '../md/interfaces.html'
import lintersHtml from '../md/linters.html'
import namingBooleanVariablesHtml from '../md/naming-boolean-variables.html'
import namingFilesHtml from '../md/naming-files.html'
import shortCircuitsHtml from '../md/short-circuits.html'
import shorthandFragmentSyntaxHtml from '../md/shorthand-fragment-syntax.html'
import yarnVersionHtml from '../md/yarn-version.html'

interface LinkConfig {
  url: string
  title: string
  html?: string
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
