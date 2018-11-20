import React, { Component } from 'react'

export default class SearchQuery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTopic: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ searchTopic: e.target.value })
  }

  render() {
    const { searchTopic } = this.state
    const { requestArticles } = this.props
    const { handleChange } = this

    return (
      <div>
        <input type="text" placeholder="Topic to search..." value={searchTopic} onChange={handleChange}/>
        <button onClick={() => requestArticles(searchTopic)}>Search!</button>
      </div>
    )
  }
}
