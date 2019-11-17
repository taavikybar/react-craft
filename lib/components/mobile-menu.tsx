import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { links } from '../config/links'

import './mobile-menu.scss'
import { Socials } from './socials'

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
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__links">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={`mobile-menu__link${currentPath === link.url ? ' mobile-menu__link--active' : ''}`}
                  to={link.url}
                  onClick={closeMenu}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Socials small centered onClick={closeMenu} />
      </div>
    </div>
  )
}
