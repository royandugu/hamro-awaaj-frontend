import { FaPhoneAlt } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import "./footer.css";

const ClientFooter = () => {
    return (
        <footer> 
            <div className="bg-primary bg-opacity-80 flex flex-col items-center">
                <h2> Get <span className="text-secondary">in touch</span> </h2>
                <p className="max-w-2xl text-center"> There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available. </p>
                <div className="flex w-full justify-between pt-10">
                    <div className="inputFormContainer w-1/3">
                        <h5 className="mb-5 text-[1.5rem]"> Say hello ! </h5>
                        <input type="text" placeholder="Email" /><br />
                        <input type="password" placeholder="Password" /><br />
                        <textarea placeholder="Message" />
                    </div>

                    <div className="w-1/3">
                        <h5 className="text-[1.5rem]"> Contact us </h5>
                        <div className="flex gap-5 items-center">
                            <span className=" rounded-full bg-secondary flex justify-center items-center h-15 w-15 text-[30px] mt-5 text-white">
                                <FaPhoneAlt />
                            </span>
                            <p className="text-white"> 9851212321 </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <span className=" rounded-full bg-secondary flex justify-center items-center h-15 w-15 text-[30px] mt-5 text-white">
                                <FaEarthEurope className=" text-10" />
                            </span>
                            <p className="text-white"> hamroawaaj.com.np </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <span className=" rounded-full bg-secondary flex justify-center items-center h-15 w-15 text-[30px] mt-5 text-white">
                                <FaLocationDot className=" text-10" />
                            </span>
                            <p className="text-white"> Balkumari, Lalitpur </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default ClientFooter;