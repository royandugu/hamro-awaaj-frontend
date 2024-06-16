"use client"

import { useEffect, useRef, useState, useContext} from "react";
import { FiCamera } from "react-icons/fi";
import { ReactMediaRecorder } from "react-media-recorder";
import { GrDocumentMissing } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";

import context from "../../../system/context/context";
import Link from "next/link";
import Webcam from "react-webcam";
import Spinner from "../../../system/sections/spinner/spinner";

import "./videoRecorderDisplay.css";

const UploadDisplay = () => {
  const [isCamOpen, setIsCamOpen] = useState(false);
  const [buttonSteps, setButtonSteps] = useState(0);
  const [mediaBlobUrl, setMediaBlobUrl] = useState<string>("");
  const [videoFrames, setVideoFrames] = useState<string[]>([]);
  const [hasPermission, setHasPermission] = useState(true);
  const [loading, setLoading] = useState(false);

  const canvasRef = useRef<any>(null);
  
  const contextContainer = useContext(context);
  
  useEffect(() => {
    contextContainer.setLoading(1);
  }, [])

  useEffect(() => {
    if (mediaBlobUrl) {
      (async () => {
        const frames = await extractFrames(mediaBlobUrl);
        setVideoFrames(frames);
        setLoading(false);
      })();
    }
  }, [mediaBlobUrl]);

  const handleUserMediaError = (error: any) => {
    setIsCamOpen(false);
    setButtonSteps(0);
    if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') setHasPermission(false);
    else setHasPermission(false);
  }

  const extractFrames = async (videoUrl: string) => {
    if (canvasRef && canvasRef.current) {
      const video = document.createElement('video');
      video.src = videoUrl;
      video.crossOrigin = "anonymous"; // Ensure cross-origin compatibility
      await video.play();



      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');


      const duration = video.duration;
      const interval = 3;
      const frames: any = [];

      for (let currentTime = 0; currentTime < duration; currentTime += interval) {
        video.currentTime = currentTime;
        await new Promise((resolve) => {
          video.onseeked = () => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            frames.push(canvas.toDataURL('image/png'));
            resolve(2);
          };
        });
      }

      return frames;
    }
  };


  return (
    <section className="pt-10 pb-10 bg-[rgb(220,220,220)] relative w-screen flex justify-center items-center overflow-hidden">
      <div className="bg-white flex gap-10 rounded shadow-2xl p-10 pb-20 lg:p-10">
        <div>
          <ReactMediaRecorder

            video={
              {
                width: 1920,
                height: 1080,
              }
            }
            onStop={(url) => setMediaBlobUrl(url)}
            render={({ startRecording, stopRecording }) => (
              <>
                <video controls>
                  <source src={mediaBlobUrl} />
                </video>
                <div className={`flex relative w-full rounded flex-col scale-x-[-1] justify-center items-center ${!isCamOpen ? 'dottedBorder' : ''}`}>
                  {isCamOpen ? <Webcam onUserMediaError={handleUserMediaError} /> : <div className="p-30"><FiCamera className="text-[#1c2434] text-[100px] md:text-[150px]" /></div>}
                </div>
                <div className="flex justify-center mt-10">
                  <div className="w-full">
                    <button type="submit" className={`${buttonSteps === 2 ? 'pointer-events-none' : ''} w-full px-10 flex justify-center ${contextContainer.loading === 0 ? 'py-3' : 'py-5'} bg-[#1c2434] opacity-75 hover:opacity-100 ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`} onClick={() => {
                      if (buttonSteps === 0) setIsCamOpen(true)
                      else if (buttonSteps === 1) startRecording();
                      if (hasPermission) {
                        let value = buttonSteps;
                        setButtonSteps(++value);
                      }
                    }}> {buttonSteps === 0 ? "Open webcam" : buttonSteps === 1 ? "Start recording" : "Recording ... "} </button>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="w-full"><button type="submit" className={`${buttonSteps !== 2 ? 'pointer-events-none' : ''} w-full px-10 flex justify-center ${contextContainer.loading === 0 ? 'py-3' : 'py-5'} bg-[#1c2434] opacity-75 hover:opacity-100 ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`} onClick={() => {
                    stopRecording();
                    setLoading(true);
                    setIsCamOpen(false);
                    setButtonSteps(0)
                  }}> Stop recording </button></div>
                </div>
              </>
            )}
          />

        </div>
        <canvas ref={canvasRef} width={1920} height={1080} style={{ display: 'none' }} />
        <div className={`hidden lg:flex flex-col items-center ${videoFrames.length > 0 ? '' : 'p-30 items-center'} max-w-[390px]`}>
          {loading ? <Spinner noHeight /> : videoFrames.length > 0 ? videoFrames.map((img, index) => (
            <div key={index} className={`${index > 0 ? 'mt-2' : ''} rounded h-[70px] min-w-[400px] bg-[rgb(240,240,240)] p-5 flex justify-between items-center relative`}>
              <p className="mt-0"> {`Frame number ${index + 1}`}  </p>
              <Link href={img} target="_blank"><FaArrowRight size={30} className="opacity-50 hover:opacity-100 cursor-pointer" /></Link>

            </div>
          )) : <GrDocumentMissing size={150} className="text-[rgb(200,200,200)]" />}
        </div>
      </div>
    </section>
  )
}
export default UploadDisplay;