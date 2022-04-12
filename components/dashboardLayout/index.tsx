import { Header } from '../header'
import { Sidebar } from '../sidebar'

const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <main className="flex flex-wrap">
        <Sidebar></Sidebar>
        <section className="mh-screen w-[80%]">
          <Header></Header>
          <section className="p-2">{children}</section>
        </section>
      </main>
    </>
  )
}

export default DashboardLayout
