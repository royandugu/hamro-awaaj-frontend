"use client"

import { useState } from "react";

import Context from "./context";

const ContextState=(props:any)=>{
    const [loading,setLoading]=useState(1);
    const [userDetails,setUserDetails]=useState<{email:string,username:string,fullName:string,role:string} | null>(null);
    const [audio,setAudio]=useState("");
    const [text,setText]=useState("loading");

    const collection={
        loading:loading,
        setLoading:setLoading,
        userDetails:userDetails,
        setUserDetails:setUserDetails,
        audio:audio,
        setAudio:setAudio,
        text:text,
        setText:setText
    }

    return(
        <Context.Provider value={collection}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextState;