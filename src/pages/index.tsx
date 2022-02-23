import type { NextPage } from 'next'
import Head from 'components/Head/Head'

import Layout from 'components/Layout/Layout'

const HomePage: NextPage = () => {
  return (
    <>
      <Head title="Spotify - Web Player" />
      <Layout>Homepage</Layout>
    </>
  )
}

export default HomePage
