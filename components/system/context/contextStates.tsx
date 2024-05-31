"use client"

import { useState } from "react";

import Context from "./context";

const ContextState=(props:any)=>{
    const [loading,setLoading]=useState(1);
    const [userDetails,setUserDetails]=useState<{email:string,username:string,fullName:string,role:string} | null>(null);

    const collection={
        loading:loading,
        setLoading:setLoading,
        userDetails:userDetails,
        setUserDetails:setUserDetails
    }

    return(
        <Context.Provider value={collection}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextState;