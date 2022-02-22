import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 1fr 90px;
  grid-template-areas:
    'aside    main'
    'footer   footer';
`

export const AsideWrapper = styled.aside`
  background: ${({ theme }) => theme.color.black};
  grid-column: aside;
`

export const MainWrapper = styled.main`
  background: #0c0c0c;
  grid-column: main;
`

export const FooterWrapper = styled.footer`
  background: #131313;
  grid-column: footer;
`
