import React from 'react'
import ArticleThumbnail from './article-thumbnail.js'

export default function ArticlesContainer(props) {
  const { articles } = props

  return articles.map(article => {
    return (
      <div>
        <h4>{article.headline.main}</h4>
        <h6>{article.pub_date.slice(0, 10)}</h6>
        <ArticleThumbnail image={article.multimedia} />
        <p>{article.snippet}</p>
      </div>
    )
  })
}
