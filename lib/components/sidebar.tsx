import React from 'react'
import { Link } from 'react-router-dom'

import { links } from '../config/links'

import './sidebar.scss'

interface Props {
  currentPath: string
}

export const Sidebar: React.FC<Props> = ({ currentPath }) => (
  <aside className="sidebar">
    <Link className="sidebar__logo" to="/">
      React Craft
    </Link>

    <nav>
      <ul className="sidebar__links">
        {links.map((link, index) => (
          <li key={index}>
            <Link className={`sidebar__link${currentPath === link.url ? ' sidebar__link--active' : ''}`} to={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)
