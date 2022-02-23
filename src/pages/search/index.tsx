import type { NextPage } from 'next'
import Head from 'components/Head/Head'

import Layout from 'components/Layout/Layout'

const SearchPage: NextPage = () => {
  return (
    <>
      <Head title="Search | Spotify" />
      <Layout>Search</Layout>
    </>
  )
}

export default SearchPage
