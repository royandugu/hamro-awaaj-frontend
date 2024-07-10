import { FaPhoneAlt } from "react-icons/fa";
import { FaEarthEurope, FaLocationDot } from "react-icons/fa6";

import "./footer.css";

const ClientFooter = () => {
    return (
        <footer id="contact">
            <div className="footerContainer bg-[#1c2434] flex flex-col items-center pt-20 pb-20">
                <h2> Get <span className="text-secondary">in touch</span> </h2>
                <p className="max-w-2xl text-center text-white"> If you have any queries or want to schedule a meet up with the hamro aawaj team, feel free to use the handles below. </p>
                <div className="flex w-full justify-center text-center pt-10">
                    <div>
                        <ul>
                            <li className="flex gap-5 items-center mt-5">
                                <span className=" rounded-full bg-secondary flex justify-center items-center h-15 w-15 text-[30px] text-white">
                                    <FaPhoneAlt />
                                </span>
                                <p className="text-white"> 9864460627 </p>
                            </li>
                            <li className="flex gap-5 items-center mt-5">
                                <span className=" rounded-full bg-secondary flex justify-center items-center h-15 w-15 text-[30px] text-white">
                                    <FaEarthEurope className=" text-10" />
                                </span>
                                <p className="text-white"> hamroaawaj.com.np </p>
                            </li>
                            <li className="flex gap-5 items-center mt-5">
                                <span className=" rounded-full bg-secondary flex justify-center items-center h-15 w-15 text-[30px] text-white">
                                    <FaLocationDot className=" text-10" />
                                </span>
                                <p className="text-white"> Balkumari, Lalitpur </p>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default ClientFooter;