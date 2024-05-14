import WorkingMechanism from "../../../../../public/Ransomware-working-mechanism.png";
import Image from "next/image";

import { MdSpeakerNotes } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const AwesomeFeatures = () => {
    return (
        <section className="flex flex-col items-center normalSection">
            <h2> Working <span className="text-secondary"> Mechanism </span></h2>
            <p className=" max-w-150 text-center"> There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available </p>
            
            <Image src={WorkingMechanism} alt="Working mechanism" className="mt-20"/>
            
            <div className=" grid grid-cols-2 justify-center mt-20 w-full gap-20">
                <div className="flex items-center gap-10">
                    <MdSpeakerNotes className=" text-[70px] text-secondary" />
                    <div>
                        <h5> Unlimited Features </h5>
                        <p className="max-w-150 mt-1"> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available </p>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <IoMdSunny className=" text-[70px] text-secondary" />
                    <div>
                        <h5> High Resolution </h5>
                        <p className="max-w-150 mt-1"> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available </p>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <FaPaintBrush className=" text-[70px] text-secondary" />
                    <div>
                        <h5> Modern Design </h5>
                        <p className="max-w-150 mt-1"> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available </p>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <FaTelegramPlane className=" text-[70px] text-secondary" />
                    <div>
                        <h5> Unique Design </h5>
                        <p className="max-w-150 mt-1"> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available </p>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <FaQuoteLeft className=" text-[70px] text-secondary" />
                    
                    <div>
                        <h5> Clean Code </h5>
                        <p className="max-w-150 mt-1"> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AwesomeFeatures;