import { Brand } from '../brand'

export const Sidebar = () => {
  return (
    <section className="h-screen w-full bg-[#283342] text-white sm:fixed md:relative md:w-[20%] md:max-w-[260px]">
      <Brand></Brand>
    </section>
  )
}
