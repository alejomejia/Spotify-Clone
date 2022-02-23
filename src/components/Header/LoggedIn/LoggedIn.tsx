import { signOut } from 'next-auth/react'

import Button from 'components/Button/Button'

import theme from 'utils/styled/theme'

import * as S from './LoggedIn.styles'

const LoggedIn = () => {
  const handleLogout = () => signOut()

  return (
    <S.LoggedInWrapper>
      <Button
        padding="10px 34px"
        fontSize={12}
        color={theme.color.white}
        onClick={handleLogout}
      >
        Upgrade
      </Button>
      <Button
        padding="10px 34px"
        fontSize={12}
        backgroundColor={theme.color.white}
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </S.LoggedInWrapper>
  )
}

export default LoggedIn
