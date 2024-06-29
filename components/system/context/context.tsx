import {createContext} from "react";

type ContextType={
    loading:number,
    setLoading:React.Dispatch<React.SetStateAction<number>>,
    popUpNumber:number,
    setPopUpNumber:React.Dispatch<React.SetStateAction<number>>,
    popMessage:{textMessage:string,buttonText:string},
    setPopMessage:React.Dispatch<React.SetStateAction<{textMessage:string,buttonText:string}>>
    popButtonLabel:{actionNumber:number,actionData:any}
    setPopButtonLabel:React.Dispatch<React.SetStateAction<{actionNumber:number,actionData:any}>>
}

const defaultValue:ContextType={
    loading: 1,
    setLoading: () => {},
    popUpNumber:-1, 
    setPopUpNumber:()=>{},
    popMessage:{textMessage:"",buttonText:""},
    setPopMessage:()=>{},
    popButtonLabel:{actionNumber:0,actionData:""},
    setPopButtonLabel:()=>{}
}

const context=createContext(defaultValue);

export default context;
