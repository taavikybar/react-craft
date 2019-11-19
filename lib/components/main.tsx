import { Router, Route } from 'react-router-dom'
import React, { useState } from 'react'
import { createBrowserHistory } from 'history'

import { links } from '../config/links'

import './main.scss'
import { Article } from './article'
import { Sidebar } from './sidebar'
import { MobileMenu } from './mobile-menu'
import { Navigation } from './navigation'
import { Socials } from './socials'
import { Comments } from './comments'
import { Home } from './home'

const history = createBrowserHistory()

history.listen(() => window.scrollTo(0, 0))

export const Main: React.FC = () => {
  const [pathName, setPathName] = useState(history.location.pathname)

  return (
    <main className="main">
      <Router history={history}>
        <Sidebar currentPath={pathName} />
        <MobileMenu currentPath={pathName} />

        <Route path="/" exact>
          <Article onRender={setPathName}>
            <Home />
            <Socials centered />
          </Article>
        </Route>

        {links.map((link, index) => (
          <Route key={index} path={link.url} exact>
            <Article html={link.html || ''} onRender={setPathName} />
            <Comments />
            <Navigation currentPathName={pathName} />
          </Route>
        ))}
      </Router>
    </main>
  )
}
