import React from 'react'

import './socials.scss'

interface Props {
  small?: boolean
  centered?: boolean
  onClick?: () => void
}

export const Socials: React.FC<Props> = ({ small, centered, onClick }) => (
  <div className={`socials${small ? ' socials--small' : ''}${centered ? ' socials--centered' : ''}`}>
    <a onClick={onClick} href="https://www.linkedin.com/in/taavi-kybar" target="_blank" rel="noopener noreferrer">
      <i className="icon icon--no-left-margin">
        <img src="/img/linkedin.png" />
      </i>
    </a>

    <a onClick={onClick} href="https://medium.com/@taavi.kyber" target="_blank" rel="noopener noreferrer">
      <i className="icon">
        <img src="/img/medium.png" />
      </i>
    </a>

    <a onClick={onClick} href="https://github.com/taavikybar" target="_blank" rel="noopener noreferrer">
      <i className="icon">
        <img src="/img/github.png" />
      </i>
    </a>
  </div>
)
