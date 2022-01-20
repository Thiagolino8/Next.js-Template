import type { NextPage } from 'next'
import { Container, Header, Main } from '../styles/Pages/Home'
import Toggle from '../assets/components/toggle'
import SwitchContextProvider from '../hooks/useSwitch'
import ThemeContextProvider from '../hooks/useTheme'
import { useSSR } from 'use-ssr'

const Home: NextPage = () => {
  const { isBrowser } = useSSR()
  return (
    <Container>
      <Header>
        <ThemeContextProvider>
          <SwitchContextProvider>
            {isBrowser && <Toggle />}
          </SwitchContextProvider>
        </ThemeContextProvider>
      </Header>

      <Main>
        <h1>Default Template Next.js</h1>
        <p>
          Este é um template base para projetos Next.js que contem Typescript,
          Tailwind, Twin.macro e Styled Components
        </p>
      </Main>

      <footer></footer>
    </Container>
  )
}

export default Home
