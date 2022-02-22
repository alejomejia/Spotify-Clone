import styled from 'styled-components'

interface LayoutWrapperProps {
  $isUserLoggedIn: boolean
}

export const LayoutWrapper = styled.div<LayoutWrapperProps>`
  min-height: 100%;
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: ${({ $isUserLoggedIn }) =>
    $isUserLoggedIn ? '1fr 90px' : '1fr 76px'};
  grid-template-areas:
    'aside    main'
    'footer   footer';
`

export const AsideWrapper = styled.aside`
  background: ${({ theme }) => theme.color.black};
  grid-area: aside;
`

export const MainWrapper = styled.main`
  background: #0c0c0c;
  grid-area: main;
`

export const FooterWrapper = styled.footer`
  background: #131313;
  grid-area: footer;
`
