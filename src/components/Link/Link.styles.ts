import styled from 'styled-components'

interface LinkProps {
  $color?: string
  $fontSize?: number
  $fontWeight?: number
}

export const LinkWrapper = styled.div``

export const Link = styled.a<LinkProps>`
  color: ${({ $color, theme }) => $color || theme.color.nobel};
  font-size: ${({ $fontSize }) => $fontSize || 11}px;
  font-weight: ${({ $fontWeight }) => $fontWeight || 400};
`
