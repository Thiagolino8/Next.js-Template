import { Switch } from '@headlessui/react'
import type { NextPage } from 'next'
import { useSwitch } from '../../hooks/useSwitch'
import ToggleButton from '../../styles/Components/Toggle'

const Toggle: NextPage = () => {
  const { enabled, toggleTheme, SwitchClasses } = useSwitch()

  return (
    <Switch checked={enabled} onChange={toggleTheme} className={SwitchClasses}>
      <ToggleButton enabled={enabled} />
    </Switch>
  )
}

export default Toggle
