"use client"

import { useState, useContext, useEffect} from "react";

import PrimaryButton from "../../../system/components/wrappers/primaryButton/primaryButton";
import { universalJSONPost } from "../../../system/api/apiCallers";

import context from "../../../system/context/context";

const EnterOtpForForgetPassword=()=>{
    const [otpEntered, setOtpEntered]=useState("");
    const popMessage ="OTP did not match";

    const contextContainer=useContext(context);

    useEffect(()=>{
        contextContainer.setLoading(1);
    },[])

    const sendOtp=async ()=>{
        contextContainer.setLoading(0);
        const response= await universalJSONPost({token:otpEntered},"register/confirm_otp");
        const textResponse=await response?.text();
         
        if(textResponse === '"SUCCESS"'){
            contextContainer.setPopUpNumber(6);
        }
        else contextContainer.setLoading(3);
    }

    return(
        <div className="normalInputContainer min-w-22.5">
            <p> Enter the OTP that has been mailed to you </p>
            <input type="text" className="border border-[rgb(200,200,200)] mt-5 rounded" onChange={(e)=>setOtpEntered(e.target.value)}/>
            {contextContainer.loading === 3 ? <p className="text-red-300 mt-5"> {popMessage} </p> : ""}
            
            <PrimaryButton classes="mt-5 m-auto w-full" onClick={sendOtp}>
               {contextContainer.loading === 0 ? <img src="/spinner.svg" className="h-[50px] w-[50px] m-auto" /> : "Send Otp"} 
            </PrimaryButton>
        </div>
    )
}
export default EnterOtpForForgetPassword;