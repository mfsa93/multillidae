import Router from 'next/router'
import { useEffect, useState } from 'react'

const User = ({ user }: any) => {
  const [menuActive, setMenuActive] = useState(false)
  const getDisplayName = () => {
    return user.firstname ? `${user.firstname} ${user.lastname}` : user.username
  }

  const getRole = () => {
    return user.admin ? 'Admin' : 'User'
  }

  const handleMenuClick = () => {
    setMenuActive(!menuActive)
  }

  const handleSignOut = () => {
    localStorage.removeItem('token')
    Router.push('/')
  }

  return (
    <div className="flex w-full py-4 px-2">
      <div className="mx-2 flex aspect-square h-[42px] w-[42px] flex-col overflow-hidden">
        <img
          src="images/sh.jpeg"
          alt=""
          className="h-[42px] w-[42px] rounded-sm"
        />
      </div>
      <div className="flex h-full w-auto flex-col">
        <div className="flex h-full w-full flex-col truncate text-[14px]">
          {getDisplayName()}
        </div>
        <div className="flex h-full flex-col text-[11px] text-[#FED600]">
          {getRole()}
        </div>
      </div>
      <div>
        <button
          data-dropdown-toggle="dropdownSmall"
          className="rounded-sm px-2 py-1 text-[14px] text-white"
          onClick={handleMenuClick}
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            className="fill-white"
          >
            <g
              id="bde61d18-5e52-4298-8faa-925dda811c76"
              data-name="more vertical"
            >
              <circle cx="12.13" cy="21.5" r="2.5" />
              <circle cx="12.13" cy="12" r="2.5" />
              <circle cx="12.13" cy="2.5" r="2.5" />
            </g>
          </svg>
        </button>
        <div
          id="dropdownSmall"
          className={`absolute z-10 w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700 ${
            menuActive ? 'block' : 'hidden'
          }`}
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSmallButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleSignOut}
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default User
function handleClick(arg0: string, handleClick: any) {
  throw new Error('Function not implemented.')
}
