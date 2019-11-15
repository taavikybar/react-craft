import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import './styles/globals.scss'
import { Main } from './components/main'

window.setTimeout(() => {
  ReactDOM.render(<Main />, document.getElementById('root'))
}, 200)

/* Webpack Dev Server Hot Module Replacement */
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept()
}

// @ts-ignore
__webpack_public_path__ = 'http://localhost:9010/' // eslint-disable-line
