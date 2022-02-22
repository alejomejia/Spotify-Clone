import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './StaticNav.styles'
import { topItems, bottomItems } from './StaticNav.utils'
import StaticNavVariants from './StaticNav.animations'

const StaticNav = () => {
  const router = useRouter()

  return (
    <S.StaticNavWrapper>
      <S.TopNav>
        <S.Nav>
          <S.List>
            {topItems.map(({ id, label, path, icon, iconActive }) => (
              <S.Item key={id}>
                <Link href={path} passHref>
                  <S.ItemLink
                    variants={StaticNavVariants}
                    initial="initial"
                    animate={router.pathname === path ? 'active' : 'initial'}
                    whileHover="hover"
                  >
                    {label}
                  </S.ItemLink>
                </Link>
              </S.Item>
            ))}
          </S.List>
        </S.Nav>
      </S.TopNav>
      <S.BottomNav>
        <S.Nav>
          <S.List>
            {bottomItems.map(({ id, label, path, icon }) => (
              <S.Item key={id}>
                <Link href={path} passHref>
                  <S.ItemLink
                    variants={StaticNavVariants}
                    initial="initial"
                    animate={router.pathname === path ? 'active' : 'initial'}
                    whileHover="hover"
                  >
                    {label}
                  </S.ItemLink>
                </Link>
              </S.Item>
            ))}
          </S.List>
        </S.Nav>
      </S.BottomNav>
    </S.StaticNavWrapper>
  )
}

export default StaticNav
