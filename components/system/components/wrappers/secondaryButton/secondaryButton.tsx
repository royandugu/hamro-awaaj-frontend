import { ReactNode } from "react";

const SecondaryButton=({type,children, classes, onClick}:{type?:"submit" | "reset" | "button" | undefined, children:ReactNode, classes?:string, onClick?:any})=>{
    return(
        <button type={type ?? "submit"} className={`secondaryButton text-white rounded py-3 px-5 ${classes}`} onClick={onClick}>{children}</button>
    )
}

export default SecondaryButton;