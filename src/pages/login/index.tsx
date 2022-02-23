import type { NextPage } from 'next'
import { getProviders } from 'next-auth/react'

import Head from 'components/Head/Head'
import LoginContainer from 'containers/Login/Login'

export const getServerSideProps = async () => {
  const provider = await getProviders()

  return {
    props: {
      provider,
    },
  }
}

const LoginPage: NextPage = ({ provider }: any) => {
  return (
    <>
      <Head title="Login | Spotify" />
      <LoginContainer provider={provider} />
    </>
  )
}

export default LoginPage
