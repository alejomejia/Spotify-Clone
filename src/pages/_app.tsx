import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'

import theme from 'utils/styled/theme'
import GlobalStyles from 'utils/styled/global'
import 'utils/styled/font-face.css'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}

export default App
