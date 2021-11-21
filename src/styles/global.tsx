import { createGlobalStyle, ThemeContext } from 'styled-components'
import tw, { GlobalStyles as BaseStyles} from 'twin.macro'
import 'tailwindcss/tailwind.css'

const CustomStyles = createGlobalStyle`
  * {
    ${tw`
      m-0
      p-0
      box-border
      outline-none
    `}
  }

  body {
    ${tw`
      bg-background
      text-text
      antialiased
      font-normal
      font-sans
    `}
  }
`

const TailwindStyles = createGlobalStyle`
    :root {
    --color-background: ${props => props.theme.colors.background};
    --color-text: ${props => props.theme.colors.text};
    --color-primary: ${props => props.theme.colors.primary};
  }
`

const GlobalStyles = () => (
  <>
    <TailwindStyles />
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
