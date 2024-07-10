"use client";

import React, { useRef, useState, useEffect, useContext } from "react";
import { universalFilePost } from "../../../system/api/apiCallers";
import { RiFileSearchFill } from "react-icons/ri";
import { FiCamera } from "react-icons/fi";
import { VscDebugStart } from "react-icons/vsc";
import { IoStopSharp } from "react-icons/io5";
import { LuWebcam } from "react-icons/lu";
import { IoMdRecording } from "react-icons/io";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import context from "../../../system/context/context";
import loggedInContext from "../../../system/context/loggedInContext";

import userContext from "../../context/context";
import PrimaryButton from "../../../system/components/wrappers/primaryButton/primaryButton";
import SecondaryButton from "../../../system/components/wrappers/secondaryButton/secondaryButton";

import "../upload/upload.css";

const VideoRecorderPipeline = () => {
  const [mediaStream, setMediaStream] = useState<any>(null);
  const [recordedChunks, setRecordedChunks] = useState<any>([]);
  const [openWebcam, setOpenWebcam] = useState(false);
  const [webcamOpened, setWebcamOpened] = useState(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [stoppedRecording, setStoppedRecording] = useState<boolean>(false);

  const router=useRouter();

  const session: any = useSession();

  const videoRef = useRef<any>(null);
  const mediaRecorderRef = useRef<any>(null);

  const userContextContainer = useContext(userContext);
  const contextContainer=useContext(context);

  useEffect(() => {
    const initializeVideoCapture = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1920, height: 1080, facingMode: "user" },
        });
        if (videoRef && videoRef.current) videoRef.current.srcObject = stream;
        setMediaStream(stream);
        setWebcamOpened(true);
      } catch (error) {
        contextContainer.setLoading(3);
        setWebcamOpened(false);
        console.error("Error initializing video capture:", error);
      }
    };

    if (openWebcam) initializeVideoCapture();

    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track: any) => track.stop());
      }
    };
  }, [openWebcam]);

  useEffect(()=>{
    contextContainer.setLoading(1);
  },[])

  const startRecording = () => {
    setStoppedRecording(false);
    const mediaRecorder = new MediaRecorder(mediaStream);

    mediaRecorder.ondataavailable = (event: any) => {
      if (event.data.size > 0) {
        setRecordedChunks((prev: any) => [...prev, event.data]);
      }
    };

    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    if (mediaStream) {
      mediaStream.getTracks().forEach((track: any) => track.stop());
    }
    setIsRecording(false);
    setStoppedRecording(true);
  };

  const webcamOpener = () => {
    if (webcamOpened) {
      startRecording();
    }
    else {
      setOpenWebcam(true);
    }
  }

  const handleUpload = async () => {
    if (recordedChunks.length === 0) {
      console.error("No recorded video chunks available.");
      return;
    }

    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const formData = new FormData();
    formData.append("files", blob);

    try {
      contextContainer.setLoading(0);
      const response = await universalFilePost(`videoToAudio`, formData, session?.data?.accessToken);
      const jsonResponse = await response?.json();
      if (jsonResponse.audio && jsonResponse.text) {
        const base64Audio = jsonResponse.audio;
        const binaryString = atob(base64Audio);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        const audioBuffer = bytes.buffer;
        // Create a Blob and Object URL
        const blob = new Blob([audioBuffer], { type: jsonResponse.contentType });


        const url = URL.createObjectURL(blob);
        // Set the audio URL state
        //contextContainer.setAudio(url);
        //contextContainer.setText(jsonResponse.text);
        userContextContainer.setAudio(url);
        userContextContainer.setText(jsonResponse.text);
        router.push("/user/output")
      }
      else contextContainer.setLoading(3);
    } catch (error) {
      contextContainer.setLoading(3);
      console.error("Error uploading video:", error);
    }
  };

  return (
    <section className="pt-10 pb-10 bg-[rgb(220,220,220)] relative w-screen flex justify-center items-center overflow-hidden">
      <div className="bg-white flex gap-10 rounded shadow-2xl p-10 pb-20 lg:p-10">
        <div>
          <div className={`flex relative rounded flex-col ${webcamOpened ? 'p-0' : 'p-10 md:p-30'} justify-center items-center dottedBorder md:w-[500px] h-[394px]`}>
            {(stoppedRecording && recordedChunks.length > 0) ? (
              <div>
                <video
                  controls
                  className="h-full w-full object-cover flip-x"
                  src={URL.createObjectURL(new Blob(recordedChunks, { type: "video/webm" }))}
                ></video>
              </div>
            ) : (
              <video
                ref={videoRef}
                autoPlay
                className={`${!webcamOpened ? 'hidden' : ''} w-full h-full object-cover flip-x`}
              ></video>
            )}

            {!webcamOpened ? <FiCamera className="text-[#1c2434] text-[100px] md:text-[150px]" /> : ""}
          </div>
          <div>
          </div>
          <PrimaryButton classes="w-full mt-10">
            {contextContainer.loading === 0 ? <img src="/spinner.svg" className="h-[40px] w-[40px] m-auto" /> : contextContainer.loading === 3 ?  <div> Error encountered.. </div> : stoppedRecording ? <div className="flex justify-center gap-2" onClick={handleUpload}> Upload video </div> : webcamOpened ? isRecording ? <div className="flex justify-center gap-2 pointer-events-none">
              <IoMdRecording size={20} /> Recording ...
            </div> : <div className="flex justify-center gap-2" onClick={startRecording}>
              <VscDebugStart size={20} /> Start Recording
            </div> : <div className="flex justify-center gap-2" onClick={() => {
              setWebcamOpened(true);
              webcamOpener();
            }}>
              <LuWebcam size={20} /> Open Webcam
            </div>}
          </PrimaryButton>
          <SecondaryButton classes={`w-full mt-3 ${(!isRecording && !stoppedRecording) ? 'pointer-events-none' : ''}`}>
            {stoppedRecording ? <div className="flex justify-center gap-2" onClick={()=>{
              setMediaStream(null);
              setRecordedChunks([]);
              setOpenWebcam(false);
              setWebcamOpened(false);
              setIsRecording(false);
              setStoppedRecording(false);
            }}> Discard video </div> : <div className="flex justify-center gap-2" onClick={stopRecording}>
              <IoStopSharp size={20} /> Stop Recording
            </div>}
          </SecondaryButton>
        </div>
      </div>
      <div className={`smallScreenImagesPopUp rounded block bg-white z-9 lg:hidden`}>
        <RiFileSearchFill size={150} className="text-[rgb(200,200,200)]" />
      </div>

    </section>
    // <div>
    //   <video ref={videoRef} autoPlay style={{ width: "100%", maxWidth: "640px", transform: "scaleX(-1)" }}></video>
    //   <button onClick={startRecording} disabled={isRecording}>
    //     Start Recording
    //   </button>
    //   <button onClick={stopRecording} disabled={!isRecording}>
    //     Stop Recording
    //   </button>
    //   {recordedChunks.length > 0 && (
    //     <div>
    //       <h3>Recorded Video:</h3>

    //     </div>
    //   )}
    //   {audio.length > 0 ? <audio src={audio} controls className="rounded w-full" /> : ""}
    //   <button onClick={handleUpload} disabled={recordedChunks.length === 0}>
    //     Upload Video
    //   </button>
    // </div>
  );
};

export default VideoRecorderPipeline;
