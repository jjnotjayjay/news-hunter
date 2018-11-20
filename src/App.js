import React, { Component } from 'react'
import SearchQuery from './search-query.js'
import ArticlesContainer from './articles-container.js'
import { GlobalStyles } from './global-styles.js'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }

    this.requestArticles = this.requestArticles.bind(this)
  }

  requestArticles(query) {
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        'api-key': 'ce918b45703b49bd962eb83f2010a49e',
        q: query,
        sort: 'newest'
      }
    })
      .then(response => this.setState({ articles: response.data.response.docs }))
      .catch(error => console.log(error))
    }

  render() {
    const { articles } = this.state
    const { requestArticles } = this

    return (
      <div>
        <GlobalStyles />
        <SearchQuery requestArticles={requestArticles} />
        {articles.length > 0 && <ArticlesContainer articles={articles} />}
      </div>
    )
  }
}
