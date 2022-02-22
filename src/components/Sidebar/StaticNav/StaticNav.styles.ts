import styled from 'styled-components'
import { motion } from 'framer-motion'

import fonts from 'utils/styled/fonts'

export const StaticNavWrapper = styled.div`
  padding: 0 24px;
`

export const Nav = styled.nav``

export const TopNav = styled.div`
  margin-bottom: 24px;
`

export const BottomNav = styled.div``

export const List = styled.ul``

export const Item = styled.li``

export const ItemLink = styled(motion.a)`
  display: flex;
  align-items: center;
  height: 40px;

  ${fonts.nav}
`
