"use client"

import { useState } from "react";

import Context from "./context";

const UserContextState=(props:any)=>{
    const [audio,setAudio]=useState("");
    const [text,setText]=useState("");
    
    const collection={
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
export default UserContextState;