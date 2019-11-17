import React from 'react'
import { Link } from 'react-router-dom'

import './sidebar.scss'
import { Socials } from './socials'
import { Links } from './links'

interface Props {
  currentPath: string
}

export const Sidebar: React.FC<Props> = ({ currentPath }) => (
  <aside className="sidebar">
    <Link className="sidebar__logo" to="/">
      React Craft
    </Link>

    <Links activeLinkPath={currentPath} />

    <div className="_padding">
      <Socials />
    </div>
  </aside>
)
