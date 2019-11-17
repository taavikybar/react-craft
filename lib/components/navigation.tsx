import React from 'react'
import { Link } from 'react-router-dom'

import { links } from '../config/links'

import './navigation.scss'

interface Props {
  currentPathName: string
}

export const Navigation: React.FC<Props> = ({ currentPathName }) => {
  let currentPageIndex = 0

  links.forEach((link, index) => {
    if (link.url === currentPathName) {
      currentPageIndex = index
    }
  })

  let previousPage = links[currentPageIndex - 1]
  let nextPage = links[currentPageIndex + 1]

  if (!previousPage) {
    previousPage = links[links.length - 1]
  }

  if (!nextPage) {
    nextPage = links[0]
  }

  return (
    <nav className="navigation">
      <div className="navigation__inner">
        <Link className="navigation__previous" to={previousPage.url}>
          {previousPage.title}
        </Link>

        <Link className="navigation__next" to={nextPage.url}>
          {nextPage.title}
        </Link>
      </div>
    </nav>
  )
}
