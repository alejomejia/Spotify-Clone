import styled, { css } from 'styled-components'

interface AvatarWrapperProps {
  $variant: 'circle' | 'square'
}

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  display: inline-block;
  line-height: 0;

  ${({ $variant }) =>
    $variant === 'circle' &&
    css`
      img {
        overflow: hidden;
        border-radius: 50%;
      }
    `}
`
