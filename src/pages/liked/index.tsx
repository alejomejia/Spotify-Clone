import type { NextPage } from 'next'
import Head from 'components/Head/Head'

import Layout from 'components/Layout/Layout'

const LikedPage: NextPage = () => {
  return (
    <>
      <Head title="Liked | Spotify" />
      <Layout>Liked songs</Layout>
    </>
  )
}

export default LikedPage
