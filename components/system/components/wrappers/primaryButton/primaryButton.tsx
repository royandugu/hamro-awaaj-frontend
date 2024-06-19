import { ReactNode } from "react";
import { FormEvent } from "react";

const PrimaryButton=({type,children, classes,onClick}:{type?:"submit" | "reset" | "button" | undefined, children:ReactNode, classes?:string,onClick?:(e: FormEvent) => Promise<void>})=>{
    return(
        <button type={type ?? "submit"} className={`primaryButton text-white rounded ${classes}`} onClick={onClick}>{children}</button>
    )
}

export default PrimaryButton;