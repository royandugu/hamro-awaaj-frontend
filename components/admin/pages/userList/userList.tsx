"use client"

import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSession } from "next-auth/react";
import { universalProtectedGet } from "../../../system/api/apiCallers";

import context from "../../../system/context/context";
import TableDesign from "../../components/tableDesign/tableDesign";
import Spinner from "../../../system/sections/spinner/spinner";

const UserList = () => {
    const [loading,setLoading]=useState(true);
    const [userList,setUserList]=useState<any>([]);
    const [email,setEmail]=useState("");

    const contextContainer=useContext(context);

    const session: any = useSession();

    useEffect(()=>{
        const fetchUserList=async ()=>{
            const response = await universalProtectedGet("admin/getAllUsers", session?.data?.accessToken) 
            console.log(response);
            setUserList(response);
            setLoading(false);
        }
        if(session?.data?.accessToken) fetchUserList();
    },[session])
    
    useEffect(()=>{
        if(contextContainer.loading === 2){
            let dummyArray=[...userList];
            dummyArray=dummyArray.filter(users=>users.email !== email)
            setUserList(dummyArray);
        }
    },[contextContainer.loading])

    const deletionClick=(email:any)=>{
        contextContainer.setLoading(1);
        contextContainer.setPopMessage({textMessage:"Are you sure you want to delete this user?", buttonText:"Delete user"})
        contextContainer.setPopUpNumber(2);
        setEmail(email);
        contextContainer.setPopButtonLabel({actionNumber:0,actionData:email});
    }   

    if (loading) return <Spinner />
    else {
        return <TableDesign title="All users" tableRows={["Name", "Username", "Email", "Action"]} dataKeys={["fullName", "username", "email"]} tableCols={userList} deletionClick={deletionClick} focusItem="email"/>
    }
}
export default UserList;