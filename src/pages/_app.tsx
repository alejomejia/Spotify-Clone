import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'utils/styled/theme'
import GlobalStyles from 'utils/styled/global'
import 'utils/styled/font-face.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
