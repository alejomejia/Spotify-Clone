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
  gap: 16px;
  align-items: center;
  height: 40px;

  ${fonts.nav}
`

export const IconWrapper = styled.div``

export const IconPlusWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};

  svg {
    padding: 6px;
  }
`

export const IconHeartWrapper = styled.div`
  background: linear-gradient(135deg, #450af5, #c4efd9);

  svg {
    padding: 6px;
  }
`

export const Label = styled.span``
