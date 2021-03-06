import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 12vh 0 6vh 0;
`

const Title = styled.h2`
  margin-bottom: 1vh;
  font-size: 3.75rem;
  text-transform: uppercase;
  text-shadow: 3px 2px 15px #999;

  @media (max-width: 500px) {
    font-size: 10vw;
  }
`

const Subtitle = styled.span`
  margin: 0.5rem;
  line-height: 1.875rem;
  vertical-align: top;
  font-size: 1rem;
  font-style: italic;
  color: #444;
`

const Logo = styled.img`
  height: 1.875rem;
`

export default function Header() {
  return (
    <Wrapper>
      <Title>News Hunter</Title>
      <Subtitle>Searching the NYT Archives for seeds of knowledge.</Subtitle>
      <Logo src='Assets/logo.png' />
    </Wrapper>
  )
}
