import { ReactNode } from "react";

const PrimaryButton=({type,children, classes}:{type?:"submit" | "reset" | "button" | undefined, children:ReactNode, classes?:string})=>{
    return(
        <button type={type ?? "submit"} className={`primaryButton text-white rounded ${classes}`}>{children}</button>
    )
}

export default PrimaryButton;