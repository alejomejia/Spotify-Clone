import IconButton from 'components/IconButton/IconButton'
import Button from 'components/Button/Button'

import theme from 'utils/styled/theme'

import * as S from './Header.styles'

const Header = () => (
  <S.HeaderWrapper>
    <S.Container>
      <S.ButtonsWrapper>
        <IconButton
          iconName="angleLeft"
          iconSize={22}
          padding={5}
          buttonColor={theme.color.white}
          buttonBackground={theme.color.black}
          buttonRadius={60}
          isDisabled
          onClick={() => alert('Go Prev')}
        />
        <IconButton
          iconName="angleRight"
          iconSize={22}
          padding={5}
          buttonColor={theme.color.white}
          buttonBackground={theme.color.black}
          buttonRadius={60}
          onClick={() => alert('Go Next')}
        />
      </S.ButtonsWrapper>
      <S.LoginWrapper>
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
          onClick={() => alert('Log In')}
        >
          Log In
        </Button>
      </S.LoginWrapper>
    </S.Container>
  </S.HeaderWrapper>
)

export default Header
