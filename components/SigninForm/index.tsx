import Link from 'next/link'
const SignIn = () => {
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
        />
      </div>
      <div className="mb-4 text-center">
        <input
          type="button"
          className="text-light cursor-pointer rounded bg-[#03A9F5] py-3 px-10 text-white hover:bg-blue-500"
          value="LOGIN"
        />
      </div>
      <div className="text-center">Don’t have an account yet?</div>
      <div className="text-center">
        <Link href="/signup">Sign up here</Link>
      </div>
    </>
  )
}

export default SignIn
