import React from 'react'
import { Link } from 'react-router-dom'

import { links } from '../config/links'

import './sidebar.scss'

export const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <nav>
      <ul className="sidebar__links">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)
