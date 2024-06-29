"use client"

import { useContext } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { universalDelete } from "../../../system/api/apiCallers";
import { useSession } from "next-auth/react";

import context from "../../../system/context/context";
import PrimaryButton from "../../../system/components/wrappers/primaryButton/primaryButton";

const PopMessage = () => {
    const contextContainer = useContext(context);

    const session: any = useSession();
    
    
    return (
        <div className="pt-5 pb-5">
            <IoWarningOutline size={130} className="text-red-400 m-auto mb-10"/>
            <p className="mb-5"> {contextContainer.popMessage.textMessage} </p>
            <PrimaryButton classes="w-full redButton" onClick={async ()=>{
                if(contextContainer.popButtonLabel?.actionNumber === 0){
                    const deleteResponse=await universalDelete(`admin/deleteUser/${contextContainer.popButtonLabel?.actionData}`,session?.data?.accessToken)
                    console.log(deleteResponse);
                }
            }}>
                {contextContainer.popMessage.buttonText}
            </PrimaryButton>
        </div>
    )
}
export default PopMessage;