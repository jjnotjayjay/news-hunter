import React, { Component } from 'react'

export default class ArticlesContainer extends Component {
  render() {
    const { articles } = this.props

    return articles.map(article => {
      return (
        <div>
          <h4>{article.headline.main}</h4>
          <h6>{article.pub_date.slice(0, 10)}</h6>
          <p>{article.snippet}</p>
        </div>
      )
    })
  }
}
