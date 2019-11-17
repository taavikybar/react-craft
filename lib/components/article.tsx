import React, { useEffect } from 'react'

import './article.scss'

interface Props {
  html?: string
  children?: React.ReactNode
  onRender: (pathName: string) => void
}

export const Article: React.FC<Props> = ({ html, children, onRender }) => {
  useEffect(() => onRender(window.location.pathname))

  return (
    <article className="article">
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}

      {children}
    </article>
  )
}
