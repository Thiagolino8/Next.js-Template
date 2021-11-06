import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
