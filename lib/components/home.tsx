import React from 'react'
import { Link } from 'react-router-dom'

import { links } from '../config/links'

export const Home: React.FC = () => (
  <>
    <h1>React Craft</h1>

    <h3>Practical guidelines for improving the quality and readability of React applications</h3>

    <p>Following articles aim to address Clean Code and Clean Architecture principles in React applications:</p>

    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.url}>{link.longTitle}</Link>
        </li>
      ))}
    </ul>

    <hr />

    <b>Author: Taavi Kybar</b>

    <p>Software engineer who believes in responsibility, high quality code and software craftsmanship.</p>
  </>
)
