"use client"
import { useRef, useEffect } from "react";
import { IoVolumeHigh } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import OutputBlob from "../../../../public/outputDisplayBlob.svg";
import OutputBlob2 from "../../../../public/outputDisplayBlob2.svg";
import { FaPlayCircle } from "react-icons/fa";
import Image from "next/image";
import PrimaryButton from "../../../system/primaryButton/primaryButton";
import { useContext } from "react";
import context from "../../../system/context/context";

const OutputDisplay = ({noMaxWidth}:{noMaxWidth?:boolean}) => {
    const contextContainer=useContext(context);

    console.log("context is below")
    console.log(contextContainer);

    return (
        <>
            <section className={`pl-[5%] pr-[5%] lg:pl-[15%] lg:pr-[15%] pt-10 pb-20 ${noMaxWidth ? '':'max-w-screen-2xl'}`}>
                {/* <div className="">
                <Image src={OutputBlob2} alt="output-blob" width={500} className="absolute top-0 left-[100px]"/>
            
                <Image src={OutputBlob} alt="output-blob" width={500} className=" opacity-50"/>
                
            </div> */}
                <div className="flex flex-col lg:flex-row mt-5">
                    <div className="lg:w-1/3 flex-1 lg:pr-10 flex-grow">
                        <h2> Your Generated Output: </h2>
                        <p className="text-[#808191]"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, qui dolor commodi exercitationem, nesciunt laborum cupiditate enim necessitatibus, ut ipsa ratione vitae facere nisi! Error porro ducimus temporibus eius explicabo. </p>

                    </div>

                    <div className="border-[1px] border-[#eae9ee] shadow-2xl bg-opacity-50 p-8 rounded mt-10 lg:mt-0 lg:w-1/2">
                        <div className="h-[200px] overflow-auto">
                            <p className="mt-0"> {contextContainer.text} </p>
                        </div>
                        <div className="border-t-[2px] border-[#eae9ee] mt-5 pt-5">
                            <audio src={contextContainer.audio} controls className="rounded w-full">
                            </audio>
                        </div>
                    </div>
                </div>
                <div className="bg-[#eae9ee] rounded p-10 mt-10">
                    <PrimaryButton text="Download Transcript"/>
                </div>

            </section>
        </>
    )
}
export default OutputDisplay;