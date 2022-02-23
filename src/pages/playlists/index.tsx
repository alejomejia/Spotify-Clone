import type { NextPage } from 'next'
import Head from 'components/Head/Head'

import Layout from 'components/Layout/Layout'

const PlaylistsPage: NextPage = () => {
  return (
    <>
      <Head title="Playlists | Spotify" />
      <Layout>Playlists</Layout>
    </>
  )
}

export default PlaylistsPage
