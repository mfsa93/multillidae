import { Sidebar } from '../sidebar'

const DashboardLayout = ({ children, user }: any) => {
  return (
    <>
      <main className="flex flex-wrap">
        <Sidebar user={user}></Sidebar>
        <section className="mh-screen w-[calc(100%-380px)]">
          <section className="p-2">{children}</section>
        </section>
      </main>
    </>
  )
}

export default DashboardLayout
