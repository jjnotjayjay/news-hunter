import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 5vh 0;
`

const QueryInput = styled.input`
  margin-right: 10px;
  padding: 2px 5px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #444;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'EB Garamond', serif;
  transition: background 0.5s;

  &:hover {
    background: rgba(255, 255, 255, 0.85)
  }
`

const SearchButton = styled.button`
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #444;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'EB Garamond', serif;
  transition: background 0.5s, color 0.5s;

  &:hover {
    background: black;
    color: white;
  }
`

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
      <Wrapper>
        <QueryInput type="text" placeholder="Topic to search..." value={searchTopic} onChange={handleChange}/>
        <SearchButton onClick={() => requestArticles(searchTopic)}>Hunt!</SearchButton>
      </Wrapper>
    )
  }
}
