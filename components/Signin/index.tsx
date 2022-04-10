import Link from 'next/link'
const SignIn = () => {
    return (
        <>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Username
        </label>
        <input className="bg-[#E3EBF3] text-[12px] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Username" />
      </div>
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
          Password
        </label>
        <input className="bg-[#E3EBF3] text-[12px] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none " id="password" type="password" placeholder="Password" />
      </div>
      <div className="mb-4 text-center">
        <input type="button" className="bg-[#03A9F5] text-light hover:bg-blue-500 text-white py-3 px-10 rounded cursor-pointer" value="LOGIN"/>
      </div>
      <div className="text-center">
        Don’t have an account yet? 
      </div>
      <div className="text-center">
        <Link href="/signup">
         Sign up here
        </Link>
      </div>
        </>
        
    )
}

export default SignIn;