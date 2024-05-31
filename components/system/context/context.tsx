import {createContext} from "react";

type ContextType={
    loading:number,
    setLoading:React.Dispatch<React.SetStateAction<number>>,
    userDetails:{email:string,username:string,fullName:string,role:string} | null,
    setUserDetails:React.Dispatch<{email:string,username:string,fullName:string,role:string}>
}

const defaultValue:ContextType={
    loading: 1,
    setLoading: () => {},
    userDetails:null,
    setUserDetails:()=>{}
}

const context=createContext(defaultValue);

export default context;
