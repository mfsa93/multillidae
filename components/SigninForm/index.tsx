import Link from 'next/link'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { isLoggedIn, SignIn } from '../../services/auth'
const SignInForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    if (isLoggedIn()) {
      Router.push('/dashboard')
    }
  })

  const onChangeUsername = (e: any) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e: any) => {
    setPassword(e.target.value)
  }

  const login = () => {
    SignIn({ username, password }).then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token)
        Router.push('/dashboard')
      }
    })
  }
  return (
    <>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Username
        </label>
        <input
          className="w-full appearance-none rounded border bg-[#E3EBF3] py-3 px-3 text-[12px] leading-tight text-gray-700 focus:outline-none "
          id="username"
          type="text"
          placeholder="Username"
          onKeyUp={onChangeUsername}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Password
        </label>
        <input
          className="w-full appearance-none rounded border bg-[#E3EBF3] py-3 px-3 text-[12px] leading-tight text-gray-700 focus:outline-none "
          id="password"
          type="password"
          placeholder="Password"
          onKeyUp={onChangePassword}
        />
      </div>
      <div className="mb-4 text-center">
        <input
          onClick={login}
          type="button"
          className="text-light cursor-pointer rounded bg-[#03A9F5] py-3 px-10 text-white hover:bg-blue-500"
          value="LOGIN"
        />
      </div>
      <div className="text-center">Don't have an account yet?</div>
      <div className="text-center">
        <Link href="/signup">Sign up here</Link>
      </div>
    </>
  )
}

export default SignInForm
