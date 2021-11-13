import tw, { styled } from 'twin.macro'

export const Container = styled.div`
  ${tw`
  w-screen
  h-screen
  flex
  justify-center
  items-center
  flex-col
  `}

  h1 {
    ${tw`
      text-primary
      text-6xl
      mt-10
    `}
  }

  p{
    ${tw`
      mt-6
      text-2xl
      leading-8
    `}
  }
`
