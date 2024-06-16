"use client"

import { TiSocialFacebook } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { Dispatch, SetStateAction, useContext} from "react";

import Link from "next/link";
import context from "../../../../system/context/context";

const ClientHeader = ({ setIsSmallMenuOpen, isLoggedIn }: { setIsSmallMenuOpen?: Dispatch<SetStateAction<boolean>>, isLoggedIn?:boolean }) => {
    const contextContainer=useContext(context);

    return (
        <>
            <header id="header" className="z-9 shadow-xl">
                <div className="w-full flex justify-between bg-black py-3 px-[15%]">
                    <div className="flex items-center gap-2">
                        <TiSocialFacebook className="text-white" size={20} />
                        <GrInstagram className="text-white" size={15} />
                        <FaXTwitter className="text-white" size={15} />
                    </div>
                </div>
                <div className="py-4 flex bg-white justify-center">
                    <h2> Hamro <span className="text-[#ff9c85]">Awaaj</span> </h2>
                </div>
                {!isLoggedIn ? <div className="hidden md:flex justify-center w-full z-9 py-3 gap-20 border-t-[2px] bg-white border-[#e7e7e7]">
                    <Link href="#hero" className="mt-0 hover:text-primary"> Home </Link>
                    <Link href="#about" className="mt-0 hover:text-primary"> About </Link>
                    <Link href="#contact" className="mt-0 hover:text-primary"> Contact </Link>
                    <Link href="#services" className="mt-0 hover:text-primary"> Services </Link>
                    <Link href="" className="mt-0 hover:text-primary"> 
                        <div className="flex gap-2 items-center" onClick={(e)=>{
                            e.preventDefault();
                            contextContainer.setPopUpNumber(0);
                        }}>
                            <FaRegUserCircle/>
                            Account 
                        </div>
                    </Link>
                </div> : 
                    <div className="hidden md:flex justify-center w-full z-9 py-3 gap-20 border-t-[2px] bg-white border-[#e7e7e7]">
                    <Link href="/user/upload" className="mt-0 hover:text-primary"> Upload </Link>
                    <Link href="/user/videoRecorder" className="mt-0 hover:text-primary"> Realtime </Link>
                    <Link href="#contact" className="mt-0 hover:text-primary"> Contact </Link>
                    <Link href="/user/accountInfo" className="mt-0 hover:text-primary"> 
                        <div className="flex gap-2 items-center">
                            <FaRegUserCircle/>
                            Account 
                        </div>
                    </Link>
                    
                </div> 
                }

                <div className="md:hidden w-full py-3 px-5 border-t-[2px] border-[#e7e7e7] cursor-pointer" onClick={() => setIsSmallMenuOpen ? setIsSmallMenuOpen(true) : ""}>
                    <RxHamburgerMenu size={30} />
                </div>

            </header>
        </>
    )
}
export default ClientHeader;  