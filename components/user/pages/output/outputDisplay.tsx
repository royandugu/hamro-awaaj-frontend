 "use client"

 import { useContext } from "react";

 import PrimaryButton from "../../../system/components/wrappers/primaryButton/primaryButton";
 import context from "../../../system/context/context";
 import userContext from "../../context/context";

 const OutputDisplay = ({ noMaxWidth }: { noMaxWidth?: boolean }) => {
     const contextContainer = useContext(context);
     const userContextContainer=useContext(userContext);

     const downloadAudio = () => {
         const anchor = document.createElement('a');
         anchor.href = userContextContainer.audio;
         anchor.download = 'audio.wav';
         anchor.click();
     };

     const downloadText = () => {
         const textBlob = new Blob([userContextContainer.text], { type: 'text/plain' });
         const textUrl = URL.createObjectURL(textBlob);
         const a = document.createElement('a');
         a.href = textUrl;
         a.download = 'transcript.txt';
         document.body.appendChild(a);
         a.click();
         document.body.removeChild(a);
     };

     return (
         <section className={`pl-[5%] pr-[5%] lg:pl-[15%] lg:pr-[15%] pt-10 pb-20 ${noMaxWidth ? '' : 'max-w-screen-2xl'}`}>
             {/* <div className="">
                 <Image src={OutputBlob2} alt="output-blob" width={500} className="absolute top-0 left-[100px]"/>
            
                 <Image src={OutputBlob} alt="output-blob" width={500} className=" opacity-50"/>
                
             </div> */}
             <div className="flex flex-col lg:flex-row mt-5">
                 <div className="lg:w-1/3 flex-1 lg:pr-10 flex-grow">
                     <h2> Your Generated Output: </h2>
                     <p className="text-[#808191]"> This is the generated text and audio by our model. Feel free to download the transcript .. </p>

                 </div>

                 <div className="border-[1px] border-[#eae9ee] shadow-2xl bg-opacity-50 p-8 rounded mt-10 lg:mt-0 lg:w-1/2">
                     <div className="h-[200px] overflow-auto">
                         <p className="mt-0"> {userContextContainer.text} </p>
                     </div>
                     <div className="border-t-[2px] border-[#eae9ee] mt-5 pt-5">
                         <audio src={userContextContainer.audio} controls className="rounded w-full">
                         </audio>
                     </div>
                 </div>
             </div>
             <div className="bg-[#eae9ee] rounded p-10 mt-10">
                 <div onClick={() => {
                     downloadAudio();
                     downloadText();
                 }}><PrimaryButton> Download Transcript </PrimaryButton></div>
             </div>

         </section>

     )
 }
 export default OutputDisplay;