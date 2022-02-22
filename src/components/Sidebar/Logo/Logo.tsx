import Link from 'next/link'
import Logo from 'components/Logo/Logo'

import * as S from './Logo.styles'

const SidebarLogo = () => {
  return (
    <S.LogoWrapper>
      <Link href="/" passHref>
        <S.LogoLink>
          <Logo fill="#fff" width="131px" />
        </S.LogoLink>
      </Link>
    </S.LogoWrapper>
  )
}

export default SidebarLogo
