import styled from 'styled-components'

interface LayoutWrapperProps {
  $isUserLoggedIn: boolean
}

export const LayoutWrapper = styled.div<LayoutWrapperProps>`
  min-height: 100%;
  display: grid;
  grid-template-columns: 230px 1fr;
  grid-template-rows: ${({ $isUserLoggedIn }) =>
    $isUserLoggedIn ? 'calc(100vh - 90px) 90px' : 'calc(100vh - 90px) 76px'};
  grid-template-areas:
    'aside    main'
    'footer   footer';
`

export const AsideWrapper = styled.aside`
  background: ${({ theme }) => theme.color.black};
  grid-area: aside;
`

export const MainWrapper = styled.main`
  grid-area: main;
  height: 100%;
  overflow-x: hidden;
  background-image: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.color.mineShaft}, ${theme.color.codGray} 330px)`};
`

export const MainContent = styled.section``

export const FooterWrapper = styled.footer`
  background-color: #131313;
  border-top: 1px solid ${({ theme }) => theme.color.mineShaft};
  grid-area: footer;
`
