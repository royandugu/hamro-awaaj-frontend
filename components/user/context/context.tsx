import {createContext} from "react";

type ContextType={
    audio:string,
    setAudio:React.Dispatch<React.SetStateAction<string>>,
    text:string,
    setText:React.Dispatch<React.SetStateAction<string>>
}


const defaultValue:ContextType={
    audio:"",
    setAudio:()=>{},
    text:"",
    setText:()=>{}
}

const userContext=createContext(defaultValue);

export default userContext;
