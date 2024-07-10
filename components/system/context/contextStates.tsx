"use client"

import { useState, useTransition } from "react";

import Context from "./context";

const ContextState=(props:any)=>{
    const [loading,setLoading]=useState(1);
    const [popUpNumber,setPopUpNumber]=useState(-1);
    const [popMessage,setPopMessage]=useState({textMessage:"",buttonText:""});
    const [popButtonLabel,setPopButtonLabel]=useState<{actionNumber:number,actionData:any}>({actionNumber:0,actionData:""});
    const [modelChoice,setModelChoice]=useState<{audioModel:string,videoModel:string}>({audioModel:"1",videoModel:"1"});
    
    const collection={
        loading:loading,
        setLoading:setLoading,
        popUpNumber:popUpNumber,
        setPopUpNumber:setPopUpNumber,
        popMessage:popMessage,
        setPopMessage:setPopMessage,
        popButtonLabel:popButtonLabel,
        setPopButtonLabel:setPopButtonLabel,
    }

    return(
        <Context.Provider value={collection}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextState;