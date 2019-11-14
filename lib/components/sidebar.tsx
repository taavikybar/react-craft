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

    <nav className="sidebar__nav">
      <ul className="sidebar__links">
        {links.map((link, index) => (
          <li key={index}>
            <Link className={`sidebar__link${currentPath === link.url ? ' sidebar__link--active' : ''}`} to={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sidebar__socials">
        <a href="https://www.linkedin.com/in/taavi-kybar" target="_blank" rel="noopener noreferrer">
          <i className="icon icon--no-left-margin">
            <img src="/img/linkedin.png" />
          </i>
        </a>

        <a href="https://medium.com/@taavi.kyber" target="_blank" rel="noopener noreferrer">
          <i className="icon">
            <img src="/img/medium.png" />
          </i>
        </a>

        <a href="https://github.com/taavikybar" target="_blank" rel="noopener noreferrer">
          <i className="icon">
            <img src="/img/github.png" />
          </i>
        </a>
      </div>
    </nav>
  </aside>
)
