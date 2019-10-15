import React from 'react'

import './article.scss'

interface ArticleProps {
  html: string
}

export const Article: React.FC<ArticleProps> = ({ html }) => (
  <div className="article">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)
