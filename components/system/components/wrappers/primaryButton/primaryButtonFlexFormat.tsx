import { ReactComponentElement } from "react";

import PrimaryButton from "./primaryButton";

const PrimaryButtonFlexFormat=({functionToCall, text, icon, classes}:{functionToCall?:any, text:string, icon:ReactComponentElement<any>, classes?:string})=>{
    return(
        <PrimaryButton onClick={functionToCall ?? ""} classes={classes}>
            <div className="flex justify-center gap-2">
                {icon}
                {text}
            </div>
        </PrimaryButton>
    )
}  

export default PrimaryButtonFlexFormat;