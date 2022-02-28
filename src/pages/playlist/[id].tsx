import { useRouter } from 'next/router'
import type { NextPage } from 'next'

import Head from 'components/Head/Head'

import Layout from 'components/Layout/Layout'

const PlaylistsPage: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head title="Playlists | Spotify" />
      <Layout>Playlist ID: {router.query.id} </Layout>
    </>
  )
}

export default PlaylistsPage
