import { Router, Route } from 'react-router-dom'
import React, { useState } from 'react'
import { createBrowserHistory } from 'history'

import { links, home } from '../config/links'

import './main.scss'
import { Article } from './article'
import { Sidebar } from './sidebar'
import { MobileMenu } from './mobile-menu'
import { Navigation } from './navigation'
import { Socials } from './socials'
import { Links } from './links'

const history = createBrowserHistory()

export const Main: React.FC = () => {
  const [pathName, setPathName] = useState(history.location.pathname)

  return (
    <main className="main">
      <Router history={history}>
        <Sidebar currentPath={pathName} />
        <MobileMenu currentPath={pathName} />

        <Route path="/" exact>
          <Article onRender={setPathName} html={home.html} />
          <Links inArticle />
          <Socials centered />
        </Route>

        {links.map((link, index) => (
          <Route key={index} path={link.url} exact>
            <Article html={link.html || ''} onRender={setPathName} />
            <Navigation currentPathName={pathName} />
          </Route>
        ))}
      </Router>
    </main>
  )
}
