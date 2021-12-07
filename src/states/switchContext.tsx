import { NextPage } from 'next'
import { createContext, useContext, useState } from 'react'
import { useTheme } from './themeContext'

interface Props {
  children: React.ReactNode
}

interface SwitchProps {
  enabled: boolean
  handleSwitch: () => void
  SwitchClasses?: string
}

const SwitchContext = createContext<SwitchProps>({} as SwitchProps)
export const useSwitch = () => useContext(SwitchContext)

const SwitchContextProvider: NextPage<Props> = ({ children }) => {
  const { toggleTheme } = useTheme()
  const [enabled, setEnabled] = useState(false)

  const handleSwitch = () => {
    setEnabled(enabled === true ? false : true)
    toggleTheme()
  }

  const SwitchClasses = `
    ${enabled ? 'bg-primary' : 'bg-white'}
    relative inline-flex flex-shrink-0 items-center h-6 w-11 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75
  `

  return (
    <SwitchContext.Provider value={{ enabled, handleSwitch, SwitchClasses }}>
      {children}
    </SwitchContext.Provider>
  )
}

export default SwitchContextProvider
