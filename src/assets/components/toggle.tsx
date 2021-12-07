import { Switch } from '@headlessui/react'
import { useState } from 'react'
import type { NextPage } from 'next'
import { useTheme } from '../../states/themeContext'
import ToggleButton from '../../styles/Components/Toggle'

const Toggle: NextPage = () => {
  const [enabled, setEnabled] = useState(false)
  const { toggleTheme } = useTheme()

  const handleSwitch = () => {
    setEnabled(enabled === true ? false : true)
    toggleTheme()
  }

  const SwitchClasses = `
    ${enabled ? 'bg-primary' : 'bg-white'}
    relative inline-flex flex-shrink-0 items-center h-6 w-11 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75
  `

  return (
    <Switch checked={enabled} onChange={handleSwitch} className={SwitchClasses}>
      <ToggleButton enabled={enabled} />
    </Switch>
  )
}

export default Toggle
