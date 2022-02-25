import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PlaylistsWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  margin-bottom: 40px;
  overflow-x: hidden;
`

export const Nav = styled.nav``

export const List = styled.ul`
  padding-top: 8px;
`

export const ListItem = styled.li``

export const Link = styled(motion.a)`
  display: block;
  margin-right: 16px;
  font-size: 14px;
  line-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
