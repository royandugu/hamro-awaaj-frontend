"use client"

import { useQuery } from "react-query";
import { useSession } from "next-auth/react";
import { universalProtectedGet } from "../../../system/api/apiCallers";

import TableDesign from "../../components/tableDesign/tableDesign";

const UserList=()=>{
    const session:any=useSession();
    console.log(session?.data?.accessToken);
    
    const {data,status}=useQuery("all-users",()=>universalProtectedGet("admin/getAllUsers",session?.data?.accessToken));
    
    console.log(data);

    return <TableDesign title="All users" tableRows={["Name", "Username", "Email", "Age", "Gender"]} dataKeys={["banner", "title", "location", "startDate", "endDate"]} />
}
export default UserList;