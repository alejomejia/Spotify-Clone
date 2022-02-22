import SidebarLogo from './Logo/Logo'
import SidebarStaticNav from './StaticNav/StaticNav'

import * as S from './Sidebar.styles'

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <SidebarLogo />
      <SidebarStaticNav />
    </S.SidebarWrapper>
  )
}

export default Sidebar
