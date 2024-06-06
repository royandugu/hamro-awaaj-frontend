"use client"

import { useEffect, useState } from "react";
import context from "../../system/context/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { FiCamera } from "react-icons/fi";
import Webcam from "react-webcam";

import "./videoRecorderDisplay.css";

const UploadDisplay = () => {
    const contextContainer = useContext(context);
    const [isCamOpen,setIsCamOpen]=useState(false);

    const camOpenerAndRecorder=()=>{
        
    }

    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])

    return (
        <section className="pt-10 pb-10 bg-[rgb(220,220,220)] relative w-screen flex justify-center items-center overflow-hidden">
            <div className="bg-white flex justify-center rounded shadow-2xl p-10 lg:w-[708px]">
                <div className="w-full h-full"> 
                    <div className={`flex relative w-full lg:h-[400px] rounded flex-col scale-x-[-1] justify-center items-center ${!isCamOpen ? 'dottedBorder' : ''}`}>
                        {isCamOpen ? <Webcam audio={false} className=" w-full h-full object-cover"/> : <FiCamera className="text-[#1c2434] text-[100px] md:text-[150px]" /> }
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className="w-full">
                            <button type="submit" className={` w-full px-10 flex justify-center ${contextContainer.loading === 0 ? 'py-3' : 'py-5'} bg-[#1c2434] opacity-75 hover:opacity-100 ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`} onClick={()=>setIsCamOpen(true)}> Open webcam </button>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className="w-full"><button type="submit" className={` w-full px-10 flex justify-center ${contextContainer.loading === 0 ? 'py-3' : 'py-5'} bg-[#1c2434] opacity-75 hover:opacity-100 ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`}> Stop recording </button></div>
                    </div>
                </div>
             
            </div>
        </section>
    )
}
export default UploadDisplay;