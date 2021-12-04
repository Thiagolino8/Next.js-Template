import { NextPage } from 'next'
import React, { useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'
import GlobalStyles from '../styles/global'

interface Props {
  children: React.ReactNode
}

export const ThemeContext = React.createContext({})


const ThemeContextProvider: NextPage<Props> = (props) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
          {props.children}
          <GlobalStyles />
        </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
