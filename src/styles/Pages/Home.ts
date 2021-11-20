import tw, { styled } from 'twin.macro'

export const Container = styled.div`
  ${tw`
  p-14
  flex
  flex-col
  w-screen
  h-screen
  justify-center
  `}

  h1 {
    ${tw`
      text-primary
      text-6xl
      mt-10
    `}
  }

  p {
    ${tw`
      mt-6
      text-2xl
      leading-8
    `}
  }
`

export const Header = tw.header`
  flex
  items-start
  justify-end
`

export const Main = tw.main`
  h-auto
  w-auto
  flex
  flex-1
  flex-col
  justify-center
`
