import React from 'react'

import './socials.scss'

interface Props {
  small?: boolean
  centered?: boolean
}

export const Socials: React.FC<Props> = ({ small, centered }) => (
  <div className={`socials${small ? ' socials--small' : ''}${centered ? ' socials--centered' : ''}`}>
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
)
