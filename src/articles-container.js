import React from 'react'
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

const Card = styled.div`
  width: 29vw;
  margin: 0.5rem auto;
  padding: 2vw;
  position: relative;
  border: 1px solid black;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.6);
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.85);
    transform: translateY(-0.2rem);
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`

const Date = styled.span`
  position: absolute;
  top: 1vw;
  right: 1vw;
  font-size: 0.75rem;
`

const Headline = styled.h4`
  margin: 1rem 0;
`

const ArticleThumbnail = styled.img`
  float: right;
  width: 12vw;
  margin: 2px 0 0 10px;
  border: 1px solid black;
  background: white;

  @media (max-width: 700px) {
    width: 36vw;
  }
`

const Snippet = styled.p`
  font-size: 0.75rem;
  text-align: left;
`

export default function ArticlesContainer(props) {
  const { articles } = props

  return (
    <Container>
      {articles.map(article => {
        return (
          <Card>
            <Date>{article.pub_date.slice(0, 10)}</Date>
            <Headline>{article.headline.main}</Headline>
            {article.multimedia.length > 0
              ? <ArticleThumbnail src={'https://www.nytimes.com/' + article.multimedia[0].url} />
              : <ArticleThumbnail src='Assets/newspaper.png' />}
            <Snippet>
              {article.snippet + '  '}
              <a href={article.web_url} style={{ 'font-style': 'italic' }}>Link</a>
            </Snippet>
          </Card>
        )
      })}
    </Container>
  )
}
