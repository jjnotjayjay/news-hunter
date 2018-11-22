import React from 'react'
import Article from './article.js'
import styled from 'styled-components'

const Container = styled.div`
  width: 70vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    width: 90vw;
  }
`

export default function Articles(props) {
  const { articles } = props

  return (
    <Container>
      {articles.map(article => <Article article={article} />)}
    </Container>
  )
}
