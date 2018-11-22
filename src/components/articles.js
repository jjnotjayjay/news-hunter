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
  padding: 0.75rem;
  position: relative;
  border: 1px solid black;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
    transform: translateY(-0.25rem);
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`

const Date = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 0.67rem;
`

const Headline = styled.h4`
  margin: 1.25rem 0 1rem 0;
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

export default function Articles(props) {
  const { articles } = props

  return (
    <Container>
      {articles.map(article => {
        return (
          <Card>
            <Date>{article.pub_date.slice(0, 10)}</Date>
            <Headline>{article.headline.main}</Headline>
            {article.multimedia.length
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
