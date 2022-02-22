import Sidebar from 'components/Sidebar/Sidebar'
import SignUpBar from 'components/SignUpBar/SignUpBar'

import * as S from './Layout.styles'

const Layout = () => {
  const isUserLoggedIn = false

  return (
    <S.LayoutWrapper $isUserLoggedIn={isUserLoggedIn}>
      <S.AsideWrapper>
        <Sidebar />
      </S.AsideWrapper>
      <S.MainWrapper>main</S.MainWrapper>
      <S.FooterWrapper>
        {!isUserLoggedIn && (
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
