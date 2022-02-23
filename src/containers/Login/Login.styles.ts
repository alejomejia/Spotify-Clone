import styled from 'styled-components'

export const LoginWrapper = styled.main`
  min-height: 100%;
  background-color: ${({ theme }) => theme.color.white};
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.color.iron};
  color: ${({ theme }) => theme.color.black};

  & > div {
    flex: 1;
  }
`

export const Container = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 36px 16px;
  text-align: center;
`

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black};
`
