import { IoSettings } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const EasyToCustomize = () => {
    return (
        <section className="bg-[#f0f0f0] normalSection pl-[0%] pr-[0%]">
            <div className="flex justify-evenly">
                <div className="flex flex-col justify-center items-center px-20">
                    <span className=" rounded-full bg-secondary flex justify-center items-center h-20 w-20 text-[40px] text-white">
                        <IoSettings className=" text-15" />
                    </span>
                    <h5 className="mt-5"> Web application </h5>
                    <p className="text-center text-[rgb(100,100,100)]"> There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available </p>
                </div>
                <div className="flex flex-col justify-center items-center px-20">
                    <span className=" rounded-full bg-secondary flex justify-center items-center h-20 w-20 text-[40px] text-white">
                        <FaHeart className=" text-15" />
                    </span>
                    <h5 className="mt-5"> Easy interface </h5>
                    <p className="text-center text-[rgb(100,100,100)]"> There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available </p>
                </div>
                <div className="flex flex-col justify-center items-center px-20">
                    <span className=" rounded-full bg-secondary flex justify-center items-center h-20 w-20 text-[40px] text-white">
                        <FaRegClock className=" text-15" />
                    </span>
                    <h5 className="mt-5"> 24/7 support </h5>
                    <p className="text-center text-[rgb(100,100,100)]"> There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available </p>
                </div>
            </div>
        </section>
    )
}
export default EasyToCustomize; 