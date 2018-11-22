import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 6vh 0;
`

const inputAndButtonSharedStyles = `
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #444;
  border-radius: 4px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  font-size: 1rem;
  font-family: 'EB Garamond', serif;
`

const QueryInput = styled.input`
  margin-right: 0.5rem;
  padding: 0.25rem 0.75rem;
  ${inputAndButtonSharedStyles}
  transition: background 0.4s;

  &:focus {
    background: rgba(255, 255, 255, 0.85)
  }
`

const SearchButton = styled.button`
  padding: 0.25rem 0.5rem;
  ${inputAndButtonSharedStyles}
  transition: background 0.4s, color 0.4s;

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
