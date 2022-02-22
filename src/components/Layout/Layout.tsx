import Sidebar from 'components/Sidebar/Sidebar'

import * as S from './Layout.styles'

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <S.AsideWrapper>
        <Sidebar />
      </S.AsideWrapper>
      <S.MainWrapper>main</S.MainWrapper>
      <S.FooterWrapper>footer</S.FooterWrapper>
    </S.LayoutWrapper>
  )
}

export default Layout
