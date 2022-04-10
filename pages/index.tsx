import type { NextPage } from 'next'
import Head from 'next/head'
import StartPageFormCard from '../components/StartPageFormCard'
import Signin from '../components/Signin'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Multillidae | Sign In</title>
      </Head>

      <StartPageFormCard title="SIGN IN">
        <Signin />
      </StartPageFormCard>
    </div>
  )
}

export default Home
