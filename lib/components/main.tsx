import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './home'
import { Sidebar } from './sidebar'
import './main.scss'
import { interfacesDoc } from '../docs'
import { Article } from './article'

export const Main: React.FC = () => (
  <main className="main">
    <Router>
      <Sidebar />
      <Route path="/interfaces" exact>
        <Article markdownText={interfacesDoc} />
      </Route>
      {/* <Route path="/linters" exact component={lintersDoc} /> */}
      <Route path="/" exact>
        <Home />
      </Route>
    </Router>
  </main>
)
