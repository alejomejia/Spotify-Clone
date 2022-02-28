import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import useSpotify from 'hooks/useSpotify'
import { LinkVariant } from 'utils/animations'

import * as S from './Playlists.styles'

const Playlists = () => {
  const router = useRouter()
  const { playlists } = useSpotify({})

  return (
    <S.PlaylistsWrapper>
      <S.Nav>
        <S.List>
          {playlists.map(({ id, name }) => {
            const isPathActive = router.query.id === id

            return (
              <S.ListItem key={id}>
                <Link href={`/playlist/${id}`} passHref>
                  <S.Link
                    variants={LinkVariant}
                    initial="initial"
                    animate={isPathActive ? 'active' : 'initial'}
                    whileHover="hover"
                  >
                    {name}
                  </S.Link>
                </Link>
              </S.ListItem>
            )
          })}
        </S.List>
      </S.Nav>
    </S.PlaylistsWrapper>
  )
}

export default Playlists
