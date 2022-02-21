import { createGlobalStyle } from 'styled-components'
import resetCSS from './reset'

export default createGlobalStyle`
  ${resetCSS}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Circular', Helvetica Neue, sans-serif;
    font-weight: 400;
  }
`
