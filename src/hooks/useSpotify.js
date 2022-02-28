import { useState, useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'

import spotifyAPI from 'utils/lib/spotify'
import { getAllPlaylists } from 'utils/lib/spotify/services'

const useSpotify = () => {
  const { data: session } = useSession()
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    if (session) {
      session.error === 'RefreshAccessTokenError' && signIn()

      spotifyAPI.setAccessToken(session.user.accessToken)

      // Playlists
      if (spotifyAPI.getAccessToken()) {
        getAllPlaylists().then((playlists) => setPlaylists(playlists))
      }
    }
  }, [session])

  return { session, playlists }
}

export default useSpotify
