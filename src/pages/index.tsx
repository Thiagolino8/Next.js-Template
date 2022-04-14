import type { NextPage } from 'next'
import { Container, Header, Main } from '../styles/Pages/Home'
import SwitchContextProvider from '../hooks/useSwitch'
import ThemeContextProvider from '../hooks/useTheme'
import dynamic from 'next/dynamic'


const Toggle = dynamic(
  () => import('../assets/components/toggle'),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <Container>
      <Header>
        <ThemeContextProvider>
          <SwitchContextProvider>
            <Toggle />
          </SwitchContextProvider>
        </ThemeContextProvider>
      </Header>

      <Main>
        <h1>Default Template Next.js</h1>
        <p>
          Este é um template base para projetos Next.js que contem Typescript, Preact, Tailwind, Twin.macro e Styled Components
        </p>
      </Main>

      <footer></footer>
    </Container>
  )
}

export default Home
