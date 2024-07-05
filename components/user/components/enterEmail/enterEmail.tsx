"use client"

import { useState, useContext, useEffect} from "react";

import PrimaryButton from "../../../system/components/wrappers/primaryButton/primaryButton";
import { universalJsonPostNoBodyNoJwt } from "../../../system/api/apiCallers";

import context from "../../../system/context/context";

const EnterEmail=()=>{
    const [emailEntered, setEmailEntered]=useState("");
    const popMessage ="Email did not match any users";

    useEffect(()=>{
        contextContainer.setLoading(1);
    },[])

    const contextContainer=useContext(context);

    const sendEmail=async ()=>{
        contextContainer.setLoading(0);
        const response= await universalJsonPostNoBodyNoJwt(`register/email_verify/${emailEntered}`);
        const textResponse=await response?.text();
        console.log(textResponse);
        if(textResponse === '"Confirm_OTP"') {
            contextContainer.setPopButtonLabel({actionData:emailEntered, actionNumber:-1});
            contextContainer.setPopUpNumber(5);
        }
        else contextContainer.setLoading(3);
    }

    return(
        <div className="normalInputContainer min-w-22.5">
            <p> Enter your email address </p>
            <input type="text" className="border border-[rgb(200,200,200)] mt-5 rounded" onChange={(e)=>setEmailEntered(e.target.value)}/>
            {contextContainer.loading === 3 ? <p className="text-red-300 mt-5"> {popMessage} </p> : ""}
            
            <PrimaryButton classes="mt-5 m-auto w-full" onClick={sendEmail}>
               {contextContainer.loading === 0 ? <img src="/spinner.svg" className="h-[50px] w-[50px] m-auto" /> : contextContainer.loading === 3 ? "Failed" : "Send Otp"} 
            </PrimaryButton>
        </div>
    )
}
export default EnterEmail;