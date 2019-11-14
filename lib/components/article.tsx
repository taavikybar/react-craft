import React, { useEffect } from 'react'

import './article.scss'

interface Props {
  html: string
  onRender: (pathName: string) => void
}

export const Article: React.FC<Props> = ({ html, onRender }) => {
  useEffect(() => onRender(window.location.pathname))

  return (
    <div className="article">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
