import { FaPhoneAlt } from "react-icons/fa";
import { FaEarthEurope, FaLocationDot } from "react-icons/fa6";

import "./footer.css";

const ClientFooter = () => {
    return (
        <footer id="contact">
            <div className="footerContainer bg-[#1c2434] flex flex-col items-center pt-20 pb-20">
                <h2> Get <span className="text-secondary">in touch</span> </h2>
                <p className="max-w-2xl text-center text-white"> There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available. </p>
                <div className="flex w-full justify-center text-center pt-15">
                    <div>
                        <h5 className="text-[1.5rem]"> Contact us </h5>
                        <ul>
                            <li className="flex gap-5 items-center">
                                <span className=" rounded-full bg-secondary flex justify-center items-center h-15 w-15 text-[30px] mt-5 text-white">
                                    <FaPhoneAlt />
                                </span>
                                <p className="text-white"> 9851212321 </p>
                            </li>
                            <li className="flex gap-5 items-center">
                                <span className=" rounded-full bg-secondary flex justify-center items-center h-15 w-15 text-[30px] mt-5 text-white">
                                    <FaEarthEurope className=" text-10" />
                                </span>
                                <p className="text-white"> hamroawaaj.com.np </p>
                            </li>
                            <li className="flex gap-5 items-center">
                                <span className=" rounded-full bg-secondary flex justify-center items-center h-15 w-15 text-[30px] mt-5 text-white">
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