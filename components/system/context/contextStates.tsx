"use client"

import { useState } from "react";

import Context from "./context";

const ContextState=(props:any)=>{
    const [loading,setLoading]=useState(1);
    const [popUpNumber,setPopUpNumber]=useState(-1);
    const [popMessage,setPopMessage]=useState({textMessage:"",buttonText:""});

    const collection={
        loading:loading,
        setLoading:setLoading,
        popUpNumber:popUpNumber,
        setPopUpNumber:setPopUpNumber,
        popMessage:popMessage,
        setPopMessage:setPopMessage,
        popButtonClickFunction:()=>{}
    }

    return(
        <Context.Provider value={collection}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextState;