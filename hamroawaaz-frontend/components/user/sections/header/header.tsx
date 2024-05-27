"use client"

import { TiSocialFacebook } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const ClientHeader = ({setIsSmallMenuOpen}:{setIsSmallMenuOpen:Dispatch<SetStateAction<boolean>>}) => {
    return (
        <>
            <header className="z-9 shadow-xl">
                <div className="w-full flex justify-between bg-black py-3 px-[15%]">
                    <div className="flex items-center gap-2">
                        <TiSocialFacebook className="text-white" size={20} />
                        <GrInstagram className="text-white" size={15} />
                        <FaXTwitter className="text-white" size={15} />
                    </div>
                </div> 
                <div className="py-4 flex justify-center">
                    <h2> Hamro <span className="text-[#ff9c85]">Awaaj</span> </h2>
                </div>
                <div className="hidden md:flex justify-center w-full py-3 gap-20 border-t-[2px] border-[#e7e7e7]">
                    <Link href="#" className="mt-0 hover:text-primary"> Home </Link>
                    <Link href="#" className="mt-0 hover:text-primary"> About </Link>
                    <Link href="#" className="mt-0 hover:text-primary"> Services </Link>
                    <Link href="#" className="mt-0 hover:text-primary"> Contact </Link>
                    <Link href="#" className="mt-0 hover:text-primary"> Account </Link>
                </div>
                <div className="bloxk md:hidden w-full py-3 px-5 border-t-[2px] border-[#e7e7e7] cursor-pointer" onClick={()=>setIsSmallMenuOpen(true)}>
                    <RxHamburgerMenu size={30} />
                </div>

            </header>
        </>
    )
}
export default ClientHeader;  