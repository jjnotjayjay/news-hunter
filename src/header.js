import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 10vh 0 5vh 0;
`

const Title = styled.h2`
  margin-bottom: 1vh;
  font-size: 2.5rem;
  text-transform: uppercase;
  text-shadow: 3px 2px 15px #999;

  @media (max-width: 500px) {
    font-size: 10vw;
  }
`

const Subtitle = styled.span`
  margin: 0.5rem;
  line-height: 1.25rem;
  vertical-align: top;
  font-size: 0.67rem;
  font-style: italic;
  color: #444;
`

const Logo = styled.img`
  height: 1.25rem;
`

export default function Header(props) {
  return (
    <Wrapper>
      <Title>News Hunter</Title>
      <Subtitle>Searching the NYT Archives for seeds of knowledge.</Subtitle>
      <Logo src='Assets/logo.png' />
    </Wrapper>
  )
}
