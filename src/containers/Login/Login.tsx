import { signIn } from 'next-auth/react'

import Logo from 'components/Logo/Logo'
import Button from 'components/Button/Button'

import theme from 'utils/styled/theme'
import { SpotifyProviderType } from 'utils/types/lib'

import * as S from './Login.styles'

export interface LoginContainerProps {
  provider: SpotifyProviderType
}

const LoginContainer = ({ provider }: LoginContainerProps) => {
  const { spotify } = provider

  const handleClick = (id: string) => signIn(id, { callbackUrl: '/' })

  return (
    <S.LoginWrapper>
      <S.Header>
        <Logo width="185px" />
      </S.Header>
      <S.Container>
        <S.Title>To continue, log in to Spotify.</S.Title>
        <Button
          padding="12px 36px"
          fontSize={14}
          backgroundColor={theme.color.malachite}
          onClick={() => handleClick(spotify.id)}
        >
          Continue with {spotify.name}
        </Button>
      </S.Container>
    </S.LoginWrapper>
  )
}

export default LoginContainer
