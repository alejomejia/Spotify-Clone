import { ThemeProvider } from 'styled-components'

import theme from 'utils/styled/theme'
import GlobalStyles from 'utils/styled/global-storybook'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'spotify',
    values: [
      {
        name: 'spotify',
        value: '#181818',
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]
