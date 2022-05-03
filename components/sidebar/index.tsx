import { useEffect } from 'react'
import { Brand } from '../brand'
import User from '../user'

export const Sidebar = ({ user }: any) => {
  useEffect(() => {
    console.log(user)
  })

  return (
    <section className="h-screen w-full bg-[#283342] text-white sm:fixed md:relative md:w-[350px] md:max-w-[260px]">
      <Brand></Brand>
      <div>
        <User user={user}></User>
      </div>
      <ul className="mt-4">
        <li className="mt-4"></li>
      </ul>
    </section>
  )
}
