import { createGlobalStyle } from 'styled-components'
import resetCSS from './reset'

export default createGlobalStyle`
  ${resetCSS}

  html,
  body {
    font-family: 'Circular', Helvetica Neue, sans-serif;
    font-weight: 400;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.nobel};
  }
  
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`
