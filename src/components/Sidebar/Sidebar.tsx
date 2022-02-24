import SidebarLogo from './Logo/Logo'
import SidebarStaticNav from './StaticNav/StaticNav'
import SidebarBottomLinks from './BottomLinks/BottomLinks'

import * as S from './Sidebar.styles'

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <SidebarLogo />
      <SidebarStaticNav />
      <SidebarBottomLinks />
    </S.SidebarWrapper>
  )
}

export default Sidebar
