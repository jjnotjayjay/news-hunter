import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const Title = styled.h2`
  font-size: 2.5rem;
  text-transform: uppercase;
  text-shadow: 3px 2px 15px #999;
  margin: 10vh 0;

  @media (max-width: 500px) {
    font-size: 10vw;
  }
`

export default function Header(props) {
  return (
    <Wrapper>
      <Title>News Hunter</Title>
    </Wrapper>
  )
}
