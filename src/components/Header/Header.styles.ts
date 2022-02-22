import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 10;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: rgba(16, 16, 16, 0.75);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  gap: 24px;
  min-height: 100%;
  padding: 12px 32px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const LoginWrapper = styled.div`
  display: flex;
  margin-left: auto;
`
