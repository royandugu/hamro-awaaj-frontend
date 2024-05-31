import {Dispatch, createContext} from "react";

type ContextType={
    loading:number,
    setLoading:React.Dispatch<React.SetStateAction<number>>,
    userDetails:{email:string,username:string,fullName:string,role:string} | null,
    setUserDetails:React.Dispatch<{email:string,username:string,fullName:string,role:string}>
    audio:any,
    setAudio:React.Dispatch<React.SetStateAction<any>>,
    text:string,
    setText:React.Dispatch<React.SetStateAction<any>>
}

const defaultValue:ContextType={
    loading: 1,
    setLoading: () => {},
    userDetails:null,
    setUserDetails:()=>{},
    audio:"",
    setAudio:()=>{},
    text:"loading",
    setText:()=>{}
}

const context=createContext(defaultValue);

export default context;
