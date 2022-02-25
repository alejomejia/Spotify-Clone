import * as S from './Playlists.styles'

export interface PlaylistsProps {}

const Playlists = ({}: PlaylistsProps) => {
  const allPlaylists = Array(9).fill('Playlist here...')

  return (
    <S.PlaylistsWrapper>
      <S.ContentWrapper>
        <S.ListWrapper>
          {allPlaylists.map((playlist, index) => (
            <div key={index}>{playlist}</div>
          ))}
        </S.ListWrapper>
      </S.ContentWrapper>
    </S.PlaylistsWrapper>
  )
}

export default Playlists
