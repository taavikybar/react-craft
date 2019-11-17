import { BrowserRouter, Route } from 'react-router-dom'
import React, { useState } from 'react'
import { createBrowserHistory } from 'history'

import { links } from '../config/links'

import './main.scss'
import { Article } from './article'
import { Home } from './home'
import { Sidebar } from './sidebar'
import { MobileMenu } from './mobile-menu'

const history = createBrowserHistory()

export const Main: React.FC = () => {
  const [pathName, setPathName] = useState(history.location.pathname)

  return (
    <main className="main">
      <BrowserRouter>
        <Sidebar currentPath={pathName} />
        <MobileMenu currentPath={pathName} />

        <Route path="/" exact>
          <Home />
        </Route>

        {links.map((link, index) => (
          <Route key={index} path={link.url} exact>
            <Article html={link.html || ''} onRender={setPathName} />
          </Route>
        ))}
      </BrowserRouter>
    </main>
  )
}
