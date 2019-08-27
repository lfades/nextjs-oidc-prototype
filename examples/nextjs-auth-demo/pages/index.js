import React from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

export default function Home() {
  const user = useFetchUser()

  return (
    <Layout user={user}>
      <h1>Auth0 example</h1>
      <p>
        To test the login with click in <i>Login</i>
      </p>
      <p>
        Once you have logged in you should be able to click in <i>Profile</i> and{' '}
        <i>Logout</i>
      </p>
    </Layout>
  )
}
