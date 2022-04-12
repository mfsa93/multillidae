import { NextPage } from "next"
import Head from "next/head"
import DashboardLayout from "../../components/dashboardLayout"

const Dashboard: NextPage = () => {
    return (
        <DashboardLayout>
        <Head>
            <title>Multillidae | Dashboard</title>
        </Head>
        <h1>page content</h1>
        </DashboardLayout>
    )
}

export default Dashboard