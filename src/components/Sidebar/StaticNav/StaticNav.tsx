import Link from 'next/link'
import { useRouter } from 'next/router'

import Icon from 'components/Icon/Icon'

import theme from 'utils/styled/theme'

import * as S from './StaticNav.styles'
import { topItems } from './StaticNav.utils'
import StaticNavVariants from './StaticNav.animations'
import path from 'path/posix'

const StaticNav = () => {
  const router = useRouter()

  const topNav = topItems.map(({ id, label, path, icon, iconActive }: any) => {
    const isPathActive = router.pathname === path

    return (
      <S.Item key={id}>
        <Link href={path} passHref>
          <S.ItemLink
            variants={StaticNavVariants.topNav}
            initial="initial"
            animate={isPathActive ? 'active' : 'initial'}
            whileHover="hover"
          >
            <S.IconWrapper>
              <Icon name={isPathActive ? iconActive : icon} />
            </S.IconWrapper>
            <S.Label>{label}</S.Label>
          </S.ItemLink>
        </Link>
      </S.Item>
    )
  })

  const bottomNav = (
    <>
      <S.Item>
        <Link href="/playlist/id" passHref>
          <S.ItemLink
            variants={StaticNavVariants.bottomNav}
            initial="initial"
            whileHover="hover"
            animate={router.pathname === '/playlist/id' ? 'active' : 'initial'}
          >
            <S.IconWrapper>
              <S.IconPlusWrapper>
                <Icon name="plus" fill={theme.color.black} />
              </S.IconPlusWrapper>
            </S.IconWrapper>
            <S.Label>Create Playlist</S.Label>
          </S.ItemLink>
        </Link>
      </S.Item>
      <S.Item>
        <Link href="/liked" passHref>
          <S.ItemLink
            variants={StaticNavVariants.bottomNav}
            initial="initial"
            whileHover="hover"
            animate={router.pathname === '/liked' ? 'active' : 'initial'}
          >
            <S.IconWrapper>
              <S.IconHeartWrapper>
                <Icon name="heart" fill={theme.color.white} />
              </S.IconHeartWrapper>
            </S.IconWrapper>
            <S.Label>Liked Songs</S.Label>
          </S.ItemLink>
        </Link>
      </S.Item>
    </>
  )

  return (
    <S.StaticNavWrapper>
      <S.TopNav>
        <S.Nav>
          <S.List>{topNav}</S.List>
        </S.Nav>
      </S.TopNav>
      <S.BottomNav>
        <S.Nav>
          <S.List>{bottomNav}</S.List>
        </S.Nav>
      </S.BottomNav>
    </S.StaticNavWrapper>
  )
}

export default StaticNav
