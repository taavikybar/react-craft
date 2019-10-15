import React from 'react'
import { Link } from 'react-router-dom'

import { links } from '../config/links'

import './sidebar.scss'

export const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <Link className="sidebar__logo" to="/">
      React Craft
    </Link>

    <nav>
      <ul className="sidebar__links">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="sidebar__link" to={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)
