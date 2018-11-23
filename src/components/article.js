import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 29vw;
  margin: 0.75rem auto;
  padding: 1.125rem;
  position: relative;
  border: 1px solid black;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
    transform: translateY(-0.375rem);
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`

const Date = styled.span`
  position: absolute;
  top: 1.125rem;
  right: 1.125rem;
  font-size: 1rem;
`

const Headline = styled.h4`
  margin: 1.875rem 0 1.5rem 0;
  font-size: 1.375rem;
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
  font-size: 1.125rem;
  text-align: left;
`

const ClickableCard = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export default function Article(props) {
  const { article } = props

  return (
    <Card>
      <Date>{article.pub_date.slice(0, 10)}</Date>
      <Headline>{article.headline.main}</Headline>
      {article.multimedia.length
        ? <ArticleThumbnail src={'https://www.nytimes.com/' + article.multimedia[0].url} />
        : <ArticleThumbnail src='Assets/newspaper.png' />}
      <Snippet>{article.snippet}</Snippet>
      <a href={article.web_url}>
        <ClickableCard></ClickableCard>
      </a>
    </Card>
  )
}
