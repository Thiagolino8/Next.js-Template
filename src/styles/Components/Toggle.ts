import tw from 'twin.macro';
import styled from 'styled-components'
import { Switch } from '@headlessui/react'

interface ToggleProps {
  enabled: boolean;
}

const ToggleButton = styled.span(({ enabled }: ToggleProps) => [
  tw`
    pointer-events-none
    inline-block
    w-4
    h-4
    rounded-full
    shadow-lg
    transform
    ring-0
    transition
    ease-in-out
    duration-200
  `,
  enabled ? tw`translate-x-6 bg-background` : tw`translate-x-1 bg-black`
])

export default ToggleButton
