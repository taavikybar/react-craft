import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

export const Header: React.FC = () => (
  <header className="header">
    <nav>
      <ul className="header__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/interfaces">Interfaces</Link>
        </li>
      </ul>
    </nav>
  </header>
)
