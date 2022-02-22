import styled from 'styled-components'

interface LogoWrapperProps {
  $width: string
}

export const LogoWrapper = styled.div<LogoWrapperProps>`
  max-width: ${({ $width }) => $width};
`
