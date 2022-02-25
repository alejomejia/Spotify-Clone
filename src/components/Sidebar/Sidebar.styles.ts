import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 24px;
`

export const BottomWrapper = styled.div`
  position: relative;
  height: 100%;
  margin: 8px 24px 0;
  border-top: 1px solid ${({ theme }) => theme.color.codGray};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 16px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.7), transparent);
    pointer-events: none;
  }
`
