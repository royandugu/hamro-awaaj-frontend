import { MdSpeakerNotes } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const AwesomeFeatures = () => {
    return (
        <section className="flex flex-col items-center pl-[0%] pr-[20px]">
            <h2> Awesome <span className="text-secondary"> Features </span></h2>
            <p className=" max-w-150 text-center"> There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available </p>
            <div className="flex justify-center mt-15 w-full">
                <img src="https://torres-react.pages.dev/static/media/preview.c756676dd9698821a4f0.png" className="ml-[-100px] mt-15" />
                <div className="flex-1">
                    <div className="flex items-center gap-3 mt-5 ml-[-60%]">
                        <span className=" rounded-full bg-secondary flex justify-center items-center h-20 w-20 text-[40px] text-white">
                            <MdSpeakerNotes className=" text-15" />
                        </span>
                        <div>
                            <h5> Unlimited Features </h5>
                            <p className="max-w-150 mt-1"> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-30 ml-[-40%]">
                        <span className=" rounded-full bg-secondary flex justify-center items-center h-20 w-20 text-[40px] text-white">
                            <IoMdSunny className=" text-15" />
                        </span>
                        <div>
                            <h5> High Resolution </h5>
                            <p className="max-w-150 mt-1"> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-30 ml-[-20%]">
                        <span className=" rounded-full bg-secondary flex justify-center items-center h-20 w-20 text-[40px] text-white">
                            <FaPaintBrush className=" text-15" />
                        </span>
                        <div>
                            <h5> Modern Design </h5>
                            <p className="max-w-150 mt-1"> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-30 ml-[-40%]">
                        <span className=" rounded-full bg-secondary flex justify-center items-center h-20 w-20 text-[40px] text-white">
                            <FaTelegramPlane className=" text-15" />
                        </span>
                        <div>
                            <h5> Unique Design </h5>
                            <p className="max-w-150 mt-1"> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-30 ml-[-60%]">
                        <span className=" rounded-full bg-secondary flex justify-center items-center h-20 w-20 text-[40px] text-white">
                            <FaQuoteLeft className=" text-15" />
                        </span>
                        <div>
                            <h5> Clean Code </h5>
                            <p className="max-w-150 mt-1"> There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AwesomeFeatures;