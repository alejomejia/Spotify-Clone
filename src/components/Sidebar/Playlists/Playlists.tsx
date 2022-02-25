import { LinkVariant } from 'utils/animations'

import * as S from './Playlists.styles'

const Playlists = () => {
  const allPlaylists = Array(30).fill('Playlist is here...')

  return (
    <S.PlaylistsWrapper>
      <S.Nav>
        <S.List>
          {allPlaylists.map((playlist, index) => (
            <S.ListItem key={index}>
              <S.Link
                href="/"
                variants={LinkVariant}
                initial="initial"
                animate="initial"
                whileHover="hover"
              >
                {playlist}
              </S.Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
    </S.PlaylistsWrapper>
  )
}

export default Playlists
