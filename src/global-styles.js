import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'EB Garamond', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: url('Assets/bg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
`
