import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles} from 'twin.macro'
import 'tailwindcss/tailwind.css'

const CustomStyles = createGlobalStyle`
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

const CssStyles = createGlobalStyle`
    :root {
    --color-background: ${props => props.theme.colors.background};
    --color-text: ${props => props.theme.colors.text};
    --color-primary: ${props => props.theme.colors.primary};
  }
`

const GlobalStyles = () => (
  <>
    <CssStyles />
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
