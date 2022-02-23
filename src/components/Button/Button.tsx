import { ButtonVariants } from './Button.animations'
import * as S from './Button.styles'

export interface ButtonProps {
  padding?: string
  fontSize?: number
  color?: string
  backgroundColor?: string
  onClick: (event?: any) => void
  children: React.ReactNode
}

const Button = ({
  padding = '8px 34px',
  fontSize = 14,
  color,
  backgroundColor,
  onClick,
  children = 'Button',
}: ButtonProps) => {
  return (
    <S.ButtonWrapper>
      <S.Button
        variants={ButtonVariants}
        initial="initial"
        whileHover="hover"
        $padding={padding}
        $fontSize={fontSize}
        $color={color}
        $backgroundColor={backgroundColor}
        onClick={onClick}
      >
        {children}
      </S.Button>
    </S.ButtonWrapper>
  )
}

export default Button
