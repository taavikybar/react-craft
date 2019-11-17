import React from 'react'
import { Link } from 'react-router-dom'

import { links } from '../config/links'
import './links.scss'

interface Props {
  activeLinkPath?: string
  onClickHandler?: () => void
  inArticle?: boolean
}

export const Links: React.FC<Props> = ({ activeLinkPath, onClickHandler, inArticle }) => (
  <nav className={`links${inArticle ? ' links--in-article' : ''}`}>
    <ul className="links__list">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            className={`links__link${activeLinkPath === link.url ? ' links__link--active' : ''}`}
            to={link.url}
            onClick={onClickHandler}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)
