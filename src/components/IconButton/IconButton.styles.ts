import styled from 'styled-components'

interface ButtonProps {
  $padding?: number
  $color?: string
  $background?: string
  $radius?: number
}

export const IconButtonWrapper = styled.div`
  line-height: 0.5;
`

export const Button = styled.button<ButtonProps>`
  padding: ${({ $padding }) => $padding}px;
  color: ${({ $color, theme }) => $color || theme.color.codGray};
  background-color: ${({ $background }) => $background || 'transparent'};
  border-radius: ${({ $radius }) => $radius || 0}px;

  &[disabled] {
    cursor: default;
    opacity: 0.6;
  }
`
