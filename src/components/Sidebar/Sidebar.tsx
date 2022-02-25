import { useSession } from 'next-auth/react'

import SidebarLogo from './Logo/Logo'
import SidebarStaticNav from './StaticNav/StaticNav'
import SidebarBottomLinks from './BottomLinks/BottomLinks'
import SidebarPlaylists from './Playlists/Playlists'
import SidebarDownloadApp from './DownloadApp/DownloadApp'

import * as S from './Sidebar.styles'

const Sidebar = () => {
  const { status } = useSession()

  return (
    <S.SidebarWrapper>
      <SidebarLogo />
      <SidebarStaticNav />

      {status === 'authenticated' && (
        <S.BottomWrapper>
          <SidebarPlaylists />
          <SidebarDownloadApp />
        </S.BottomWrapper>
      )}

      {status === 'unauthenticated' && <SidebarBottomLinks />}
    </S.SidebarWrapper>
  )
}

export default Sidebar
