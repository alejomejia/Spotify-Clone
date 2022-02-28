import { useState, useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'

import spotifyAPI from 'utils/lib/spotify'
import * as SPT from 'services/spotify'

const useSpotify = ({ playlistId = '' }) => {
  const { data: session } = useSession()

  const [playlist, setPlaylist] = useState({})
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    console.log(spotifyAPI)

    if (session) {
      session.error === 'RefreshAccessTokenError' && signIn()

      spotifyAPI.setAccessToken(session.user.accessToken)

      // Playlists
      if (spotifyAPI.getAccessToken()) {
        playlistId &&
          SPT.getPlaylist(playlistId).then((playlist) => setPlaylist(playlist))

        SPT.getAllPlaylists().then((playlists) => setPlaylists(playlists))
      }
    }
  }, [session, playlistId])

  return { session, playlist, playlists }
}

export default useSpotify
