"use client"

import { useState,useContext } from "react";
import { useQuery } from "react-query";
import { useSession } from "next-auth/react";
import { universalDelete, universalProtectedGet } from "../../../system/api/apiCallers";

import context from "../../../system/context/context";
import TableDesign from "../../components/tableDesign/tableDesign";
import Spinner from "../../../system/sections/spinner/spinner";

const UserList = () => {
    const contextContainer=useContext(context);

    const session: any = useSession();
    
   
    const { data, status } = useQuery("all-users", () => universalProtectedGet("admin/getAllUsers", session?.data?.accessToken));
    
    console.log(contextContainer.popButtonLabel);

    const deletionClick=(email:any)=>{
        console.log(email);
        contextContainer.setPopMessage({textMessage:"Are you sure you want to delete this user?", buttonText:"Delete user"})
        contextContainer.setPopUpNumber(2);
        contextContainer.setPopButtonLabel({actionNumber:0,actionData:email});
    }   

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching data</h5>
    else if (status === "success") {
        return <TableDesign title="All users" tableRows={["Name", "Username", "Email", "Action"]} dataKeys={["fullName", "username", "email"]} tableCols={data} deletionClick={deletionClick} focusItem="email"/>
    }
}
export default UserList;