import { NextPage } from 'next'
import { createContext, useContext } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'
import GlobalStyles from '../styles/global'
import useDarkMode, { DarkMode } from 'use-dark-mode'

interface Props {
  children: React.ReactNode
}

interface ThemeProps {
  theme: DefaultTheme
  toggleTheme: () => void
  darkmode: DarkMode
}


const ThemeContext = createContext<ThemeProps>({} as ThemeProps)
export const useTheme = () => useContext(ThemeContext)

const ThemeContextProvider: NextPage<Props> = ({ children }) => {
  const darkmode = useDarkMode(true, { classNameDark: 'dark', classNameLight: 'light' })
  const theme = darkmode.value ? light : dark

  const toggleTheme = () => {
    darkmode.toggle()
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, darkmode }}>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
