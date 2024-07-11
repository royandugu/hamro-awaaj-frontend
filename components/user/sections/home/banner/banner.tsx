"use client"

import { FaUserAlt } from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";
import { useContext } from "react";

import PrimaryButton from "../../../../system/components/wrappers/primaryButton/primaryButton";
import Blob from "../../../../../public/blob.svg";
import Image from "next/image";
import Symbol from "../../../../../public/Designer.png";
import SecondaryButton from "../../../../system/components/wrappers/secondaryButton/secondaryButton";

import context from "../../../../system/context/context";

const Banner = () => {
    const contextContainer=useContext(context)

    return ( 
        <section id="hero" className="relative bg-[#eae9ee] haSection pt-20 md:pt-10 lg:pt-30 xl:pt-0">
            <div className="flex justify-between items-center overflow-hidden">
                <div className="bannerContentContainer pt-15 pb-15 sm:pt-20 sm:pb-20 lg:pt-0 lg:pb-0">
                    <h1> Bridging&nbsp;Silence </h1>
                    <h2 className="mb-5"><span className="text-primary xl:whitespace-nowrap">With&nbsp;</span>Communication&nbsp;.</h2>
                    
                    <p className="max-w-[650px] text-black mb-10"> The project ”Hamro Aawaj” addresses the communication challenges faced by individuals with hearing and vocal impairments in Nepal by harnessing the power of hand gesture recognition, text conversion, and speech synthesis technologies. </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <PrimaryButton classes="w-full sm:w-auto" onClick={()=>contextContainer.setPopUpNumber(1)}> <span className="flex gap-3 items-center"><RiContactsBookFill className="text-white"/> Register </span> </PrimaryButton>
                        <SecondaryButton classes="w-full sm:w-auto" onClick={()=>contextContainer.setPopUpNumber(0)}> <span className="flex gap-3 items-center"><FaUserAlt className="text-white"/> Sign in</span> </SecondaryButton>
                    </div>  
                </div>
                <div className="relative hidden h-full lg:block xl:pb-20 pt-20">
                    <Image src={Blob} alt="blog-logo" height={600} width={600} className="opacity-70" />
                    <Image src={Symbol} alt="symbol-guy" className="absolute right-0 bottom-0" />
                </div>
            </div>
        </section>

    )
}

export default Banner;