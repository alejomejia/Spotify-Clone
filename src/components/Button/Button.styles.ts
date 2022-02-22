import styled from 'styled-components'

interface ButtonProps {
  $padding?: string
  $fontSize?: number
  $color?: string
  $backgroundColor?: string
}

export const ButtonWrapper = styled.div``

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  letter-spacing: 1.75px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 36px;

  padding: ${({ $padding }) => $padding};
  font-size: ${({ $fontSize }) => $fontSize}px;
  color: ${({ $color, theme }) => $color || theme.color.codGray};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || 'transparent'};
`
