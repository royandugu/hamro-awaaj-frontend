"use client"

import { FaFileImage } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5"
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { ChangeEvent } from "react";
import { TbCashBanknote } from "react-icons/tb";
import { RiFileSearchFill } from "react-icons/ri";
import PrimaryButton from "../../../system/primaryButton/primaryButton";
import Image from "next/image";

import "./upload.css";

const UploadDisplay = () => {
    const [uploadedPictures, setUploadedPictures] = useState<File[]>([])
    const [uploadedPicturesDisplay, setUploadedPicturesDisplay] = useState<string[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            const fileArray = Array.from(selectedFiles);

            // Concatenate new files to the existing uploadedPictures array
            setUploadedPictures(prevUploadedPictures => [...prevUploadedPictures, ...fileArray]);

            // Create URLs for the new files
            const urls = fileArray.map(file => URL.createObjectURL(file));

            // Concatenate new URLs to the existing uploadedPicturesDisplay array
            setUploadedPicturesDisplay(prevUploadedPicturesDisplay => [...prevUploadedPicturesDisplay, ...urls]);
        }
    }

    return (
        <section className="h-screen bg-[rgb(220,220,220)] w-screen flex justify-center items-center">
            <div className="bg-white flex gap-10 rounded-2xl shadow-2xl p-10">
                <div>
                    <div className="flex relative rounded-2xl flex-col p-30 justify-center items-center dottedBorder">
                        <input type="file" accept="image/*" className="absolute w-full inset-0 right-0 cursor-pointer opacity-0" onChange={handleChange} multiple />

                        <IoCloudUploadOutline size={150} className="text-primary" />
                        <h3 className="mt-5 uploadText"> Browse files to upload </h3>
                    </div>
                    <div>

                        <div className="mt-10 cursor-pointer rounded-2xl bg-[rgb(240,240,240)] p-5 flex justify-between items-center">
                            <FaFileImage size={30} />
                            <div className="flex gap-5 items-center">
                                <p className="mt-0"> - No files selected -  </p>
                                <MdDelete size={30} className="hover:text-red-400"/>

                            </div>

                        </div>



                    </div>
                    {uploadedPicturesDisplay.length > 0 ?
                        <div className="flex justify-center mt-10">
                            <PrimaryButton text="Submit" />
                        </div>
                        : ""}
                </div>
                <div className={`flex flex-col items-center ${uploadedPicturesDisplay.length > 0 ? '' : 'p-30 items-center'} max-w-[390px]`}>
                    {uploadedPicturesDisplay.length > 0 ? uploadedPicturesDisplay.map((img, index) => (
                        <div key={index} className={`${index>0 ? 'mt-2' : ''} cursor-pointer rounded-2xl h-[70px] min-w-[400px] bg-[rgb(240,240,240)] p-5 flex justify-between items-center`}>
                        <FaFileImage size={30} />
                        <div className="flex items-center">
                            <p className="mt-0"> - No files selected -  </p>
                            <MdDelete size={30} className="hover:text-red-400"/>

                        </div>

                    </div>
                    )) : <RiFileSearchFill size={150} className="text-[rgb(200,200,200)]" />}
                </div>
            </div>
        </section>
    )
}
export default UploadDisplay;