import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './home'
import { Header } from './header'
import './main.scss'

export const Main: React.FC = () => (
  <main className="main">
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
    </Router>
  </main>
)
