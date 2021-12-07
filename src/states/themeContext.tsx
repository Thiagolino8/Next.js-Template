import { NextPage } from 'next'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'
import GlobalStyles from '../styles/global'

interface Props {
  children: React.ReactNode
}

interface ThemeProps {
  theme: typeof light | typeof dark
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeProps>({} as ThemeProps)
export const useTheme = () => React.useContext(ThemeContext)

const ThemeContextProvider: NextPage<Props> = ({ children }) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
