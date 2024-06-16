import {createContext} from "react";

type ContextType={
    loading:number,
    setLoading:React.Dispatch<React.SetStateAction<number>>,
    userDetails:{email:string,username:string,fullName:string,role:string} | null,
    setUserDetails:React.Dispatch<{email:string,username:string,fullName:string,role:string}>
    audio:any,
    setAudio:React.Dispatch<React.SetStateAction<any>>,
    text:string,
    setText:React.Dispatch<React.SetStateAction<any>>
    popUpNumber:number,
    setPopUpNumber:React.Dispatch<React.SetStateAction<number>>
}

const defaultValue:ContextType={
    loading: 1,
    setLoading: () => {},
    userDetails:null,
    setUserDetails:()=>{},
    audio:"",
    setAudio:()=>{},
    text:"loading",
    setText:()=>{},
    popUpNumber:-1, 
    setPopUpNumber:()=>{}
}

const context=createContext(defaultValue);

export default context;
