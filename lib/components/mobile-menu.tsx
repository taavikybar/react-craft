import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './mobile-menu.scss'
import { Socials } from './socials'
import { Links } from './links'

interface Props {
  currentPath: string
}

export const MobileMenu: React.FC<Props> = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = (): void => setIsMenuOpen(false)

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__top">
        <Link className="mobile-menu__logo" to="/" onClick={closeMenu}>
          React Craft
        </Link>

        <div className="mobile-menu__burger" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      <div className={`mobile-menu__bottom${isMenuOpen ? ' mobile-menu__bottom--open' : ''}`}>
        <Links onClickHandler={closeMenu} activeLinkPath={currentPath} inArticle />

        <Socials small centered onClick={closeMenu} />
      </div>
    </div>
  )
}
