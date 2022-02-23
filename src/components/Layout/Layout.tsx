import { useSession } from 'next-auth/react'

import Sidebar from 'components/Sidebar/Sidebar'
import Header from 'components/Header/Header'
import SignUpBar from 'components/SignUpBar/SignUpBar'

import * as S from './Layout.styles'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { status } = useSession()

  const isUserAuth = status === 'authenticated'

  return (
    <S.LayoutWrapper $isUserLoggedIn={isUserAuth}>
      <S.AsideWrapper>
        <Sidebar />
      </S.AsideWrapper>
      <S.MainWrapper>
        <Header isUserAuth={isUserAuth} />
        <S.MainContent>{children}</S.MainContent>
      </S.MainWrapper>
      <S.FooterWrapper>
        {!isUserAuth && (
          <SignUpBar
            title="Preview of Spotify"
            description="Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed."
            buttonLabel="Sign up free"
            onButtonClick={() => alert('Sign up clicked')}
          />
        )}
      </S.FooterWrapper>
    </S.LayoutWrapper>
  )
}

export default Layout
