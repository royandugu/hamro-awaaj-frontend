import {createContext} from "react";

type ContextType={
    loading:number,
    setLoading:React.Dispatch<React.SetStateAction<number>>,
    popUpNumber:number,
    setPopUpNumber:React.Dispatch<React.SetStateAction<number>>,
    popMessage:{textMessage:string,buttonText:string},
    setPopMessage:React.Dispatch<React.SetStateAction<{textMessage:string,buttonText:string}>>
    popButtonClickFunction:any
}

const defaultValue:ContextType={
    loading: 1,
    setLoading: () => {},
    popUpNumber:-1, 
    setPopUpNumber:()=>{},
    popMessage:{textMessage:"",buttonText:""},
    setPopMessage:()=>{},
    popButtonClickFunction:()=>{}
}

const context=createContext(defaultValue);

export default context;
