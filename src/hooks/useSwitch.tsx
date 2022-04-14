import { NextPage } from 'next'
import { createContext, useContext} from 'react'
import { useTheme } from './useTheme'

interface Props {
  children: React.ReactNode
}

interface SwitchProps {
  enabled: boolean
  toggleTheme: () => void
  SwitchClasses?: string
}

const SwitchContext = createContext<SwitchProps>({} as SwitchProps)
export const useSwitch = () => useContext(SwitchContext)

const SwitchContextProvider: NextPage<Props> = ({ children }) => {
  const { toggleTheme, darkmode } = useTheme()
  const enabled = darkmode.value

  const SwitchClasses = `
    ${enabled ? 'bg-primary border-0' : 'bg-white border border-primary'}
    relative inline-flex flex-shrink-0 items-center h-6 w-11 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75
  `

  return (
    <SwitchContext.Provider value={{ enabled, toggleTheme, SwitchClasses }}>
      {children}
    </SwitchContext.Provider>
  )
}

export default SwitchContextProvider
