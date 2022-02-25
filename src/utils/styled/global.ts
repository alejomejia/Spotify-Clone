import { createGlobalStyle } from 'styled-components'
import resetCSS from './reset'

export default createGlobalStyle`
  ${resetCSS}

  html,
  body {
    font-family: 'Circular', Helvetica Neue, sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.color.nobel};
    background-color: ${({ theme }) => theme.color.codGray};
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

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(255,255,255,0.3)
  }
`
