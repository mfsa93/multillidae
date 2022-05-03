import { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import DashboardLayout from '../../components/dashboardLayout'
import { isLoggedIn } from '../../services/auth'
import { getUser } from '../../services/user'

const Dashboard: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  useEffect(() => {
    setLoggedIn(isLoggedIn())
    if (!isLoggedIn()) {
      Router.push('/')
      return
    }

    getUser().then((user) => {
      if (!user) {
        localStorage.removeItem('token')
        Router.push('/')
      }

      setUser(user)
    })
  }, [])

  return (
    <>
      {loggedIn && (
        <DashboardLayout user={user}>
          <Head>
            <title>Multillidae | Dashboard</title>
          </Head>
          <h1>page content</h1>
        </DashboardLayout>
      )}
    </>
  )
}

export default Dashboard
