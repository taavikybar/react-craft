import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'

import { links } from '../config/links'

import './main.scss'
import { Article } from './article'
import { Home } from './home'
import { Sidebar } from './sidebar'

export const Main: React.FC = () => (
  <main className="main">
    <BrowserRouter>
      <Sidebar />

      <Route path="/" exact>
        <Home />
      </Route>

      {links.map((link, index) => (
        <Route key={index} path={link.url} exact>
          <Article html={link.html || ''} />
        </Route>
      ))}
    </BrowserRouter>
  </main>
)
