import { Switch } from '@headlessui/react'
import type { NextPage } from 'next'
import { useSwitch } from '../../states/switchContext'
import ToggleButton from '../../styles/Components/Toggle'

const Toggle: NextPage = () => {
  const { enabled, handleSwitch, SwitchClasses } = useSwitch()

  return (
    <Switch checked={enabled} onChange={handleSwitch} className={SwitchClasses}>
      <ToggleButton enabled={enabled} />
    </Switch>
  )
}

export default Toggle
