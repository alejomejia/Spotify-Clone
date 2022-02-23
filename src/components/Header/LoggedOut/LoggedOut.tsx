import { useRouter } from 'next/router'

import Button from 'components/Button/Button'

import theme from 'utils/styled/theme'

import * as S from './LoggedOut.styles'

const LoggedOut = () => {
  const router = useRouter()

  const handleLogin = (e: any) => {
    e.preventDefault()
    router.push('/login')
  }

  return (
    <S.LoggedOutWrapper>
      <Button
        padding="10px 34px"
        fontSize={12}
        color={theme.color.white}
        onClick={() => alert('Sign Up')}
      >
        Sign Up
      </Button>
      <Button
        padding="10px 34px"
        fontSize={12}
        backgroundColor={theme.color.white}
        onClick={(e) => handleLogin(e)}
      >
        Log In
      </Button>
    </S.LoggedOutWrapper>
  )
}

export default LoggedOut
