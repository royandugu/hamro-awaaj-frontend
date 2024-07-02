import { ReactComponentElement } from "react";

import SecondaryButton from "./secondaryButton";

const SecondaryButtonFlexFormat=({functionToCall, text, icon}:{functionToCall:any, text:string, icon:ReactComponentElement<any>})=>{
    return(
        <SecondaryButton onClick={functionToCall}>
            <div className="flex justify-center gap-2">
                {icon}
                {text}
            </div>
        </SecondaryButton>
    )
}  

export default SecondaryButtonFlexFormat;