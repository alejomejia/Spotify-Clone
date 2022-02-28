import { useState, useEffect } from 'react'

import useSpotify from 'hooks/useSpotify'
import { LinkVariant } from 'utils/animations'

import * as S from './Playlists.styles'

const Playlists = () => {
  const { playlists } = useSpotify()

  useEffect(() => {
    console.log(playlists)
  }, [playlists])

  return (
    <S.PlaylistsWrapper>
      <S.Nav>
        <S.List>
          {playlists.map(({ id, name }) => (
            <S.ListItem key={id}>
              <S.Link
                href={`/playlist/${id}`}
                variants={LinkVariant}
                initial="initial"
                animate="initial"
                whileHover="hover"
              >
                {name}
              </S.Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
    </S.PlaylistsWrapper>
  )
}

export default Playlists
