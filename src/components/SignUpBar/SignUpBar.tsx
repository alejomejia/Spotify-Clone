import Button from 'components/Button/Button'

import theme from 'utils/styled/theme'

import * as S from './SignUpBar.styles'

export interface SignUpBarProps {
  title: string
  description?: string
  buttonLabel: string
  onButtonClick: () => void
}

const SignUpBar = ({
  title,
  description,
  buttonLabel,
  onButtonClick,
}: SignUpBarProps) => {
  return (
    <S.SignUpBarWrapper>
      <S.Content>
        <S.LeftSide>
          <S.Title>{title}</S.Title>
          {description && <S.Description>{description}</S.Description>}
        </S.LeftSide>
        <S.RightSide>
          <Button
            color={theme.color.cornflowerBlue}
            backgroundColor={theme.color.white}
            onClick={onButtonClick}
          >
            {buttonLabel}
          </Button>
        </S.RightSide>
      </S.Content>
    </S.SignUpBarWrapper>
  )
}

export default SignUpBar
