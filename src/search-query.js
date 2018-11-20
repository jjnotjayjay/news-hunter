import React, { Component } from 'react'

export default class SearchQuery extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Topic to search" />
        <button type="submit">Search!</button>
      </div>
    )
  }
}
