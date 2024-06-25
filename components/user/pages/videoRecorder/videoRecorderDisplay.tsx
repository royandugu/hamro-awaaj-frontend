"use client"

import React, { useRef, useState, useEffect } from 'react';

const VideoRecorderPipeline = () => {
  const [mediaStream, setMediaStream] = useState<any>(null);
  const [frames, setFrames] = useState<any>([]);
  const [isRecording, setIsRecording] = useState<any>(false);
  const [recordingInterval, setRecordingInterval] = useState<any>(null);
  
  const videoRef = useRef<any>(null);
  
  useEffect(() => {
    const initializeVideoCapture = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1920, height: 1080 },
        });
        videoRef.current.srcObject = stream;
        setMediaStream(stream);
        console.log('Successfully opened video capture device');
      } catch (error) {
        console.error('Error initializing video capture:', error);
      }
    };

    if (isRecording && !mediaStream) {
      initializeVideoCapture();
    }

    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track:any) => track.stop());
      }
    };
  }, [isRecording, mediaStream]);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
    clearInterval(recordingInterval);
    setRecordingInterval(null);
  };

  return (
    <div>
      <video ref={videoRef} autoPlay style={{ width: '100%', maxWidth: '640px' }}></video>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
    </div>
  );
};

export default VideoRecorderPipeline;
