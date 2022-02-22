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
  background: yellow;
  grid-column: main;
`

export const FooterWrapper = styled.footer`
  background: green;
  grid-column: footer;
`
