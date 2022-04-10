import { NextPage } from 'next'
import Head from 'next/head'
import SignupForm from '../../components/SignupForm'
import StartPageFormCard from '../../components/StartPageFormCard'
const Signup: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Multillidae | Sign Up</title>
      </Head>
      <StartPageFormCard title="SIGN UP">
        <SignupForm />
      </StartPageFormCard>
    </div>
  )
}

export default Signup
