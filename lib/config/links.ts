import componentExplorerHtml from '../html/component-explorer.html'
import exitEarlyFromIfHtml from '../html/exit-early-from-if.html'
import interfacesHtml from '../html/interfaces.html'
import lintersHtml from '../html/linters.html'
import namingBooleanVariablesHtml from '../html/naming-boolean-variables.html'
import namingFilesHtml from '../html/naming-files.html'
import shortCircuitsHtml from '../html/short-circuits.html'
import shorthandFragmentSyntaxHtml from '../html/shorthand-fragment-syntax.html'
import yarnVersionHtml from '../html/yarn-version.html'
import sassBemHtml from '../html/sass-bem.html'

interface LinkConfig {
  url: string
  title: string
  longTitle: string
  html?: string
}

export const links: LinkConfig[] = [
  {
    url: '/component-explorer',
    title: 'Component explorers',
    longTitle: 'Use a component explorer',
    html: componentExplorerHtml,
  },
  {
    url: '/exit-early-from-if',
    title: 'Exit early from if',
    longTitle: 'Exit early from if statements',
    html: exitEarlyFromIfHtml,
  },
  {
    url: '/interfaces',
    title: 'Interfaces',
    longTitle: 'Create interfaces for any sort of data object',
    html: interfacesHtml,
  },
  {
    url: '/linters',
    title: 'Linters',
    longTitle: 'Linters',
    html: lintersHtml,
  },
  {
    url: '/naming-boolean-variables',
    title: 'Naming boolean variables',
    longTitle: 'Naming boolean variables',
    html: namingBooleanVariablesHtml,
  },
  {
    url: '/naming-files',
    title: 'Naming files',
    longTitle: 'Naming files',
    html: namingFilesHtml,
  },
  {
    url: '/sass-bem',
    title: 'Sass + Bem',
    longTitle: 'Sass + BEM use guide',
    html: sassBemHtml,
  },
  {
    url: '/short-circuits',
    title: 'Short circuits',
    longTitle: 'Use short circuits instead of ternary operators',
    html: shortCircuitsHtml,
  },
  {
    url: '/shorthand-fragment-syntax',
    title: 'Shorthand fragment syntax',
    longTitle: 'Use shorthand Fragment syntax',
    html: shorthandFragmentSyntaxHtml,
  },
  {
    url: '/yarn-version',
    title: 'Yarn version',
    longTitle: 'Use yarn version (or npm version)',
    html: yarnVersionHtml,
  },
]
