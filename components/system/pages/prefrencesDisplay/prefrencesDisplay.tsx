"use client"

import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { universalJSONPost, universalJsonPostNoBody, universalProtectedGet } from "../../api/apiCallers";

import PrimaryButton from "../../components/wrappers/primaryButton/primaryButton";
import context from "../../context/loggedInContext";
import globalContext from "../../context/context";

const PrefrencesDisplay = () => {
    const contextContainer=useContext(context);
    const globalContextContainer=useContext(globalContext);

    const session:any=useSession();
    
    const [audioModel,setAudioModel]=useState("1");

    useEffect(()=>{
        globalContextContainer.setLoading(0);
    },[])

    const saveUserModel=async ()=>{
        globalContextContainer.setLoading(0)
        const response=await universalJsonPostNoBody(`admin/saveModel/${audioModel}`,session?.data?.accessToken);
        const responseText=await response?.text();
        console.log(responseText);
        if(responseText === '"SUCCESS"') {
            globalContextContainer.setLoading(1);
        }
        else globalContextContainer.setLoading(3)
    }
    
    useEffect(()=>{
        globalContextContainer.setLoading(1);
    },[])

    useEffect(() => {
        const getUserDetails=async ()=>{
            const response: any = await universalProtectedGet("user/getDetails", session?.data?.accessToken);
            setAudioModel(response.aiModelNo);
        }
        if(session && session?.data?.accessToken) getUserDetails();
    }, [session])

    useEffect(()=>{
        setAudioModel(contextContainer.modelChoice.audioModel);
    },[contextContainer.modelChoice])

    
    return (
        <div className="flex flex-col md:flex-row gap-5 items-center md:justify-center">
            <div className="border-[2px] border-[#eae9ee] rounded p-10 accountDisplay capitalize max-w-lg mt-5 md:m-0">
                <h6> Choose your Audio model : </h6>
                <form className="mt-10" onSubmit={(e)=>e.preventDefault()}>
                    <label> Choose model: </label><br />
                    <select className="p-5 mt-5 w-full rounded cursor-pointer mb-10" value={audioModel} onChange={(e)=>setAudioModel(e.target.value)}>
                        <option value="1"> Model one </option>
                        <option value="2">  Model two </option>
                    </select><br />
                    <PrimaryButton classes="capitalize w-full mb-3" onClick={()=>{
                        saveUserModel();
                        contextContainer.setModelChoice({...contextContainer.modelChoice, audioModel:audioModel})
                    }}> {globalContextContainer.loading === 0? <img src="/spinner.svg" className="h-[40px] w-[40px] m-auto" /> : globalContextContainer.loading===1 ? 'Save Changes' : globalContextContainer.loading === 2 ? "Saved sucesfully" : "Save failed"} </PrimaryButton>
                </form>
            </div>
            <div className="border-[2px] border-[#eae9ee] rounded p-10 accountDisplay capitalize max-w-lg">
                <h6> Choose your video model : </h6>
                <form className="mt-10" onSubmit={(e)=>e.preventDefault()}>
                    <label> Choose model: </label><br />
                    <select className="p-5 mt-5 w-full rounded cursor-pointer mb-10">
                        <option value="0"> Model one </option>
                        <option value="1">  Model two </option>
                    </select><br />
                    <PrimaryButton classes="capitalize w-full mb-3" onClick={()=>{
                        globalContextContainer.setPopMessage({textMessage:"Now video model one will be used", buttonText:""})
                    }}> Save Changes </PrimaryButton>
                    <PrimaryButton classes="capitalize w-full"> Revert to default </PrimaryButton>
                </form>
            </div>
        </div>
    )
}

export default PrefrencesDisplay;