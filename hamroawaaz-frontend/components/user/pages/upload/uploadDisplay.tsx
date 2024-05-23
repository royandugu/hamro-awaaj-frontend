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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

import "./upload.css";

const UploadDisplay = () => {
    const [uploadedPictures, setUploadedPictures] = useState<File[]>([])
    const [uploadedPicturesDisplay, setUploadedPicturesDisplay] = useState<string[]>([]);

    const trimText = (text:string) => {
        // Ensure the text is at least 10 characters
        if (text.length > 10) {
            return text.slice(0, 20) + "..";
        }
        return text;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            const fileArray = Array.from(selectedFiles);
            setUploadedPictures(prevUploadedPictures => [...prevUploadedPictures, ...fileArray]);
            const urls = fileArray.map(file => URL.createObjectURL(file));
            setUploadedPicturesDisplay(prevUploadedPicturesDisplay => [...prevUploadedPicturesDisplay, ...urls]);
        }
    }

    const deleteImage = (index: number) => {
        setUploadedPictures((prevItems) => {
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            return newItems;
        });
        setUploadedPicturesDisplay((prevItems) => {
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            return newItems;
        });
    }

    const deleteAll=()=>{
        setUploadedPictures([]);
        setUploadedPicturesDisplay([]);
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

                        <div className="mt-10 rounded-2xl bg-[rgb(240,240,240)] p-5 flex justify-between items-center">
                            <FaFileImage size={30} />
                            <div className="flex gap-5 items-center">
                                <p className="mt-0"> {uploadedPicturesDisplay.length === 0 ? "- No files selected -" : `- ${uploadedPicturesDisplay.length} ${uploadedPicturesDisplay.length === 1 ? 'picture' : 'pictures'} uploaded -`}  </p>
                                <MdDelete size={30} className="hover:text-red-400 cursor-pointer" onClick={deleteAll}/>

                            </div>

                        </div>

                    </div>
                    <div className="flex justify-center mt-10">
                        <PrimaryButton text="Submit" classes={`rounded-2xl ${uploadedPicturesDisplay.length === 0 ? "opacity-50 pointer-events-none cursor-pointer" : ""}`} />
                    </div>
                </div>
                <div className={`flex flex-col items-center ${uploadedPicturesDisplay.length > 0 ? '' : 'p-30 items-center'} max-w-[390px]`}>
                    {uploadedPicturesDisplay.length > 0 ? uploadedPicturesDisplay.map((img, index) => (
                        <div key={index} className={`${index > 0 ? 'mt-2' : ''} rounded-2xl h-[70px] min-w-[400px] bg-[rgb(240,240,240)] p-5 flex justify-between items-center relative`}>
                            <MdDelete size={30} className="hover:text-red-400 cursor-pointer" onClick={() => deleteImage(index)} />
                            <p className="mt-0"> {trimText(uploadedPictures[index]?.name)}  </p>
                            <Link href={img} target="_blank"><FaArrowRight size={30} className="opacity-50 hover:opacity-100 cursor-pointer" /></Link>

                        </div>
                    )) : <RiFileSearchFill size={150} className="text-[rgb(200,200,200)]" />}
                </div>
            </div>
        </section>
    )
}
export default UploadDisplay;