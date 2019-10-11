import React from 'react'
import Markdown from 'react-markdown'

interface ArticleProps {
  markdownText: string
}

export const Article: React.FC<ArticleProps> = ({ markdownText }) => (
  <Markdown source={markdownText} escapeHtml={false} />
)
