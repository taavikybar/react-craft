import React from 'react'
import Markdown from 'react-markdown'

import './article.scss'

interface ArticleProps {
  markdownText: string
}

export const Article: React.FC<ArticleProps> = ({ markdownText }) => (
  <div className="article">
    <Markdown source={markdownText} escapeHtml={false} />
  </div>
)
