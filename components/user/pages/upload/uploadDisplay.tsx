"use client"

import { FaFileImage } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5"
import { MdDelete } from "react-icons/md";
import { useEffect, useState,ChangeEvent,useContext } from "react";
import { RiFileSearchFill } from "react-icons/ri";
import { FaArrowRight,FaArrowUp } from "react-icons/fa";
import { GrDocumentMissing } from "react-icons/gr";
import { universalFilePost } from "../../../system/api/apiCallers";
import { useRouter } from "next/navigation";

import context from "../../../system/context/context";
import Link from "next/link";

import "./upload.css";

const UploadDisplay = () => {
    const [uploadedPictures, setUploadedPictures] = useState<File[]>([])
    const [uploadedPicturesDisplay, setUploadedPicturesDisplay] = useState<string[]>([]);
    const [showPopUp, setShowPopUp] = useState(false);
    
    const contextContainer = useContext(context);

    const router = useRouter();

    useEffect(() => {
        contextContainer.setLoading(1);
        contextContainer.setPopUpNumber(-1);
    }, [])

    const trimText = (text: string, trimLimit: number) => {
        // Ensure the text is at least 10 characters
        if (text.length > 10) {
            return text.slice(0, trimLimit) + "..";
        }
        return text;
    };

    const submitImages = async () => {
        if (uploadedPictures.length > 0) {
            contextContainer.setLoading(0);
            const formData = new FormData();
            for (let i = 0; i < uploadedPictures.length; i++) {
                formData.append('files', uploadedPictures[i]);
            }
            try {
                const res = await universalFilePost("getSLTest", formData);
                if (res?.ok) {
                    const data = await res.json();
                    
                    //contextContainer.setText(data.text);
                    // const responseData = await res.text();
                    // const boundary = responseData.split('\n')[0].trim();
                    const base64Audio = data.audio;
                    const binaryString = atob(base64Audio);
                    const len = binaryString.length;
                    const bytes = new Uint8Array(len);
                    for (let i = 0; i < len; i++) {
                        bytes[i] = binaryString.charCodeAt(i);
                    }
                    const audioBuffer = bytes.buffer;
                     // Create a Blob and Object URL
                    const blob = new Blob([audioBuffer], { type: data.contentType });
                    
                    
                    const url = URL.createObjectURL(blob);
                     // Set the audio URL state
                    //contextContainer.setAudio(url);
                    // const parts = responseData.split(boundary);
                    // console.log("Parts is ", parts);
                    // parts.forEach(part => {
                    //     if (part.includes('filename="audio.wav"')) {
                    //         const audioData = part.split('\r\n\r\n')[1].trim();
                        
                    //         const audioBlob = new Blob([audioData], { type: 'audio/mp3' });
                    //         console.log(audioBlob);
                    //         const audioUrl = URL.createObjectURL(audioBlob);
                    //         contextContainer.setAudio(audioUrl);
                    //     } else if (part.includes('Content-Disposition: form-data; name="text"')) {
                    //         const textData = part.split('\r\n\r\n')[1].trim();
                    //         console.log("textData is",textData);
                    //         contextContainer.setText(textData);
                    //     }
                    // });
                    router.push("/user/output")

                }
            }
            catch (err) {
                console.log(err)
            }

        }
    }

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

    const deleteAll = () => {
        setUploadedPictures([]);
        setUploadedPicturesDisplay([]);
    }

    return (
        <section className="pt-10 pb-10 bg-[rgb(220,220,220)] relative w-screen flex justify-center items-center overflow-hidden">
            <div className="bg-white flex gap-10 rounded shadow-2xl p-10 pb-20 lg:p-10">
                <div> 
                    <div className="flex relative rounded flex-col p-10 md:p-30 justify-center items-center dottedBorder">
                        <input type="file" accept="image/*" className="absolute w-full inset-0 right-0 cursor-pointer opacity-0" onChange={handleChange} multiple />

                        <IoCloudUploadOutline className="text-[#1c2434] text-[100px] md:text-[150px]" />
                        <h3 className="mt-5 uploadText text-center"> Browse files to upload </h3>
                    </div>
                    <div>

                        <div className="mt-10 rounded bg-[rgb(240,240,240)] p-5 flex justify-between items-center">
                            <FaFileImage size={30} />
                            <div className="flex gap-5 items-center">
                                <p className="mt-0 hidden sm:block"> {uploadedPicturesDisplay.length === 0 ? "- No files selected -" : `- ${uploadedPicturesDisplay.length} ${uploadedPicturesDisplay.length === 1 ? 'picture' : 'pictures'} selected -`}  </p>
                                <p className="mt-0 block sm:hidden text-[14px]"> {uploadedPicturesDisplay.length === 0 ? "0 selected" : `${uploadedPicturesDisplay.length} selected`}  </p>
                                <MdDelete size={30} className="hover:text-red-400 cursor-pointer" onClick={deleteAll} />

                            </div>

                        </div>

                    </div>
                    <div className="flex justify-center mt-5">
                        <div className="w-full" onClick={submitImages}><button type="submit" className={` w-full px-10 flex justify-center ${contextContainer.loading === 0 ? 'py-3' : 'py-5'} bg-[#1c2434] opacity-75 hover:opacity-100 ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`}> {contextContainer.loading === 0 ? <img src="/spinner.svg" className="h-[40px] w-[40px]" /> : contextContainer.loading === 1 ? 'Submit' : contextContainer.loading === 2 ? 'Submitted sucesfully, redirecting ...' : 'Submission failed'} </button></div>
                    </div>
                </div>
                <div className={`hidden lg:flex flex-col items-center ${uploadedPicturesDisplay.length > 0 ? '' : 'p-30 items-center'} max-w-[390px]`}>
                    {uploadedPicturesDisplay.length > 0 ? uploadedPicturesDisplay.map((img, index) => (
                        <div key={index} className={`${index > 0 ? 'mt-2' : ''} rounded h-[70px] min-w-[400px] bg-[rgb(240,240,240)] p-5 flex justify-between items-center relative`}>
                            <MdDelete size={30} className="hover:text-red-400 cursor-pointer" onClick={() => deleteImage(index)} />
                            <p className="mt-0"> {trimText(uploadedPictures[index]?.name, 20)}  </p>
                            <Link href={img} target="_blank"><FaArrowRight size={30} className="opacity-50 hover:opacity-100 cursor-pointer" /></Link>

                        </div>
                    )) : <GrDocumentMissing size={150} className="text-[rgb(200,200,200)]" />}
                </div>
            </div>
            <FaArrowUp size={30} className="absolute bottom-[60px] block lg:hidden opacity-75 hover:opacity-100 cursor-pointer" onClick={() => setShowPopUp(true)} />
            <div className={`smallScreenImagesPopUp rounded block bg-white z-9 lg:hidden ${showPopUp ? 'active' : ''}`}>
                {uploadedPicturesDisplay.length > 0 ? uploadedPicturesDisplay.map((img, index) => (
                    <div key={index} className={`${index > 0 ? 'mt-2' : ''} rounded h-[70px] bg-[rgb(240,240,240)] p-5 flex justify-between items-center relative`}>
                        <MdDelete size={30} className="hover:text-red-400 cursor-pointer" onClick={() => deleteImage(index)} />
                        <p className="mt-0 text-[14px]"> {trimText(uploadedPictures[index]?.name, 10)}  </p>
                        <Link href={img} target="_blank"><FaArrowRight size={30} className="opacity-50 hover:opacity-100 cursor-pointer" /></Link>

                    </div>
                )) : <RiFileSearchFill size={150} className="text-[rgb(200,200,200)]" />}
            </div>
            <div className={`fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,.7)] ${showPopUp ? 'block' : 'hidden'}`} onClick={() => setShowPopUp(false)} />
        </section>
    )
}
export default UploadDisplay;