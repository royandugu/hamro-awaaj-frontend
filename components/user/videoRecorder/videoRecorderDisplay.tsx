"use client"

import { useEffect, useRef, useState } from "react";
import context from "../../system/context/context";
import { useContext } from "react";
import { FiCamera } from "react-icons/fi";
import { ReactMediaRecorder } from "react-media-recorder";

import Webcam from "react-webcam";

import "./videoRecorderDisplay.css";

/* 
    import React, { useEffect, useRef, useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import axios from 'axios';

const VideoRecorder = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);

  const extractFrames = async (videoUrl) => {
    const video = document.createElement('video');
    video.src = videoUrl;
    video.crossOrigin = "anonymous"; // Ensure cross-origin compatibility
    await video.play();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const duration = video.duration;
    const frameRate = 30; // You can adjust the frame rate as needed

    const frames = [];

    for (let currentTime = 0; currentTime < duration; currentTime += 1 / frameRate) {
      video.currentTime = currentTime;
      await new Promise((resolve) => {
        video.onseeked = () => {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          frames.push(canvas.toDataURL('image/png'));
          resolve();
        };
      });
    }

    return frames;
  };

  const sendFramesToAPI = async (frames) => {
    for (const frame of frames) {
      const response = await axios.post('https://your-api-endpoint.com/upload', { image: frame });
      console.log(response.data);
    }
  };

  useEffect(() => {
    if (mediaBlobUrl) {
      (async () => {
        const frames = await extractFrames(mediaBlobUrl);
        await sendFramesToAPI(frames);
      })();
    }
  }, [mediaBlobUrl]);

  return (
    <div>
      <ReactMediaRecorder
        video
        onStop={(blobUrl) => setMediaBlobUrl(blobUrl)}
        render={({ previewStream, startRecording, stopRecording }) => (
          <div>
            <video
              ref={videoRef}
              src={mediaBlobUrl}
              autoPlay
              controls
            />
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
          </div>
        )}
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default VideoRecorder;

*/

const UploadDisplay = () => {
    const contextContainer = useContext(context);
    const canvasRef=useRef(null);
 
    const [isCamOpen, setIsCamOpen] = useState(false);
    const [buttonSteps,setButtonSteps]=useState(0);

    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])

    return (
        <section className="pt-10 pb-10 bg-[rgb(220,220,220)] relative w-screen flex justify-center items-center overflow-hidden">
            <div className="bg-white flex justify-center rounded shadow-2xl p-10 lg:w-[708px]">
                <div className="w-full h-full">
                    <ReactMediaRecorder
                        video
                        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                            <>
                                <div className={`flex relative w-full lg:h-[400px] rounded flex-col scale-x-[-1] justify-center items-center ${!isCamOpen ? 'dottedBorder' : ''}`}>
                                    {isCamOpen ? <Webcam audio={false} className=" w-full h-full object-cover translate-x-[-1]" /> : <FiCamera className="text-[#1c2434] text-[100px] md:text-[150px]" />}
                                </div>
                                <div className="flex justify-center mt-10">
                                    <div className="w-full">
                                        <button type="submit" className={`${buttonSteps === 2 ? 'pointer-events-none' : ''} w-full px-10 flex justify-center ${contextContainer.loading === 0 ? 'py-3' : 'py-5'} bg-[#1c2434] opacity-75 hover:opacity-100 ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`} onClick={() => {
                                            if(buttonSteps === 0) setIsCamOpen(true)
                                            else if(buttonSteps === 1) startRecording();
                                            let value=buttonSteps;
                                            setButtonSteps(++value);
                                        }}> {buttonSteps === 0 ? "Open webcam" : buttonSteps === 1 ? "Start recording" : "Recording ... "} </button>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <div className="w-full"><button type="submit" className={`${buttonSteps!==2 ? 'pointer-events-none' : ''} w-full px-10 flex justify-center ${contextContainer.loading === 0 ? 'py-3' : 'py-5'} bg-[#1c2434] opacity-75 hover:opacity-100 ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`} onClick={()=>{
                                        stopRecording();
                                        setButtonSteps(0)
                                    }}> Stop recording </button></div>
                                </div>
                                {status === "stopped" ? <video controls className="mt-10"> <source src={mediaBlobUrl}/> </video> : ""}
                            </>
                        )}
                    />

                </div>
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                <div>

                </div>

            </div>
        </section>
    )
}
export default UploadDisplay;