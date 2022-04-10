import Link from 'next/link'
const SignUp = () => {
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
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Signature
        </label>
        <textarea
          className="w-full appearance-none rounded border bg-[#E3EBF3] py-3 px-3 text-[12px] leading-tight text-gray-700 focus:outline-none "
          id="signature"
          placeholder="Signature"
        />
      </div>
      <div className="mb-4 text-center">
        <input
          type="button"
          className="text-light cursor-pointer rounded bg-[#03A9F5] py-3 px-10 text-white hover:bg-blue-500"
          value="REGISTER"
        />
      </div>
      <div className="text-center">Have an account already?</div>
      <div className="text-center">
        <Link href="/">Sign in here</Link>
      </div>
    </>
  )
}

export default SignUp
