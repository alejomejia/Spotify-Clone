import { useRouter } from 'next/router'
import type { NextPage } from 'next'

import Head from 'components/Head/Head'
import Layout from 'components/Layout/Layout'

import useSpotify from 'hooks/useSpotify'

const PlaylistsPage: NextPage = () => {
  const router = useRouter()
  const playlistId = router.query.id as string
  const { playlist } = useSpotify(playlistId)

  return (
    <>
      <Head title="Playlists | Spotify" />
      <Layout>
        <p>Playlist ID: {router.query.id}</p>
        <div>
          {playlist.tracks &&
            playlist.tracks.items.map((track) => (
              <div key={track.id}>
                {track.track.name} - {track.track.artists[0].name}
              </div>
            ))}
        </div>
      </Layout>
    </>
  )
}

export default PlaylistsPage
