"use client"

import { useState,useContext } from "react";
import { useQuery } from "react-query";
import { useSession } from "next-auth/react";
import { universalDelete, universalProtectedGet } from "../../../system/api/apiCallers";

import context from "../../../system/context/context";
import TableDesign from "../../components/tableDesign/tableDesign";
import Spinner from "../../../system/sections/spinner/spinner";

const UserList = () => {
    const [selectedUserEmail,setSelectedUserEmail]=useState("");

    const contextContainer=useContext(context);

    const session: any = useSession();
    
    const { data, status } = useQuery("all-users", () => universalProtectedGet("admin/getAllUsers", session?.data?.accessToken));

    const deleteUser=async ()=>{
        console.log("first");
        contextContainer.setLoading(0);
        const deletionResults=await universalDelete(`/deleteUser/${selectedUserEmail}`,session?.data?.accessToken);
        console.log(deletionResults);
    }
    
    const deletionClick=()=>{
        contextContainer.setPopMessage({textMessage:"Are you sure you want to delete this user?", buttonText:"Delete user"})
        contextContainer.setPopUpNumber(2);
        contextContainer.popButtonClickFunction=deleteUser;
    }

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching data</h5>
    else if (status === "success") {
        return <TableDesign title="All users" tableRows={["Name", "Username", "Email", "Action"]} dataKeys={["fullName", "username", "email"]} tableCols={data} deletionClick={deletionClick} setSelectedData={setSelectedUserEmail} focusItem="email"/>
    }
}
export default UserList;