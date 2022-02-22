import styled from 'styled-components'

export const SignUpBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.color.redViolet}, ${theme.color.cornflowerBlue})`};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
  padding: 16px 24px;
  color: ${({ theme }) => theme.color.white};
`

export const LeftSide = styled.div``

export const RightSide = styled.div`
  margin-left: auto;
`

export const Title = styled.h3`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const Description = styled.p``
