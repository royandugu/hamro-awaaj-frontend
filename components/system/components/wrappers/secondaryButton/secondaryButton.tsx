import { ReactNode } from "react";

const SecondaryButton=({type,children, classes}:{type?:"submit" | "reset" | "button" | undefined, children:ReactNode, classes?:string})=>{
    return(
        <button type={type ?? "submit"} className={`bg-[#1c2434] opacity-75 hover:opacity-100 text-white rounded py-3 px-5 ${classes}`}>{children}</button>
    )
}

export default SecondaryButton;