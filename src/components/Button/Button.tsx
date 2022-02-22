import * as S from './Button.styles'

export interface ButtonProps {
  padding?: string
  fontSize?: number
  color?: string
  backgroundColor?: string
  onClick: () => void
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
