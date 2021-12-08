import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import ThemeContextProvider from '../hooks/useTheme'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
        <Component {...pageProps} />
    </ThemeContextProvider>
  )

}

export default MyApp
