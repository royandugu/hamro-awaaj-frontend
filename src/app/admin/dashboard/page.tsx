"use client"

import dynamic from "next/dynamic";

const DashboardDisplay = dynamic(() => import('../../../../components/system/dashboard/dashboardDisplay'), { ssr: false })

const Page=()=>{
    return <DashboardDisplay/>
}
export default Page;