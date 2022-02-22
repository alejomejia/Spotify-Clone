import styled from 'styled-components'

interface IconWrapperProps {
  $fill?: string
  $size: number
}

export const IconWrapper = styled.div<IconWrapperProps>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  fill: ${({ $fill }) => $fill};
`
