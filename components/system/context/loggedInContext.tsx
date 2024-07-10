import {createContext} from "react";

type ContextType={
    modelChoice:{audioModel:string,videoModel:string}
    setModelChoice:React.Dispatch<React.SetStateAction<{audioModel:string, videoModel:string}>>
}


const defaultValue:ContextType={
    modelChoice:{audioModel:"1",videoModel:"1"},
    setModelChoice:()=>{}
}

const context=createContext(defaultValue);

export default context;
