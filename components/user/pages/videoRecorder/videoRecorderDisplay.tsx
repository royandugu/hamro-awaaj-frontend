"use client";

import React, { useRef, useState, useEffect } from "react";
import { universalFilePost } from "../../../system/api/apiCallers";

const VideoRecorderPipeline = () => {
  const [mediaStream, setMediaStream] = useState<any>(null);
  const [recordedChunks, setRecordedChunks] = useState<any>([]);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audio, setAudio] = useState("");

  const videoRef = useRef<any>(null);
  const mediaRecorderRef = useRef<any>(null);

  useEffect(() => {
    const initializeVideoCapture = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1920, height: 1080, facingMode: "user" },

        });
        videoRef.current.srcObject = stream;
        setMediaStream(stream);
        console.log("Successfully opened video capture device");
      } catch (error) {
        console.error("Error initializing video capture:", error);
      }
    };

    initializeVideoCapture();

    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track: any) => track.stop());
      }
    };
  }, []);

  const startRecording = () => {
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
    setIsRecording(false);
  };

  const handleUpload = async () => {
    if (recordedChunks.length === 0) {
      console.error("No recorded video chunks available.");
      return;
    }

    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const formData = new FormData();
    formData.append("files", blob);

    try {
      const response = await universalFilePost("getSL", formData);
      const jsonResponse = await response?.json();
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
      setAudio(url);
      console.log(jsonResponse);
      console.log("Video uploaded successfully.");
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay style={{ width: "100%", maxWidth: "640px", transform: "scaleX(-1)" }}></video>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      {recordedChunks.length > 0 && (
        <div>
          <h3>Recorded Video:</h3>
          <video
            controls
            style={{ width: "100%", maxWidth: "640px", transform: "scaleX(-1)" }}
            src={URL.createObjectURL(new Blob(recordedChunks, { type: "video/webm" }))}
          ></video>
        </div>
      )}
      {audio.length > 0 ? <audio src={audio} controls className="rounded w-full" /> : ""}
      <button onClick={handleUpload} disabled={recordedChunks.length === 0}>
        Upload Video
      </button>
    </div>
  );
};

export default VideoRecorderPipeline;
