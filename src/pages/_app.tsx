import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import ThemeContextProvider from '../hooks/useTheme'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, []
    )
  return (
    <div style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      <ThemeContextProvider>
        <Head>
          <title>Template Next.js</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </div>
  );

}

export default MyApp
