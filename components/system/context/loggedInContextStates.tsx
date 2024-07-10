"use client"

import { useState } from "react";

import Context from "./loggedInContext";

const ContextState=(props:any)=>{
    const [modelChoice,setModelChoice]=useState<{audioModel:string,videoModel:string}>({audioModel:"1",videoModel:"1"});
    
    const collection={
        modelChoice:modelChoice,
        setModelChoice:setModelChoice
    }

    return(
        <Context.Provider value={collection}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextState;