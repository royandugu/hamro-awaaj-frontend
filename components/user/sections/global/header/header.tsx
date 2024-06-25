"use client"

import { TiSocialFacebook } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { Dispatch, SetStateAction, useContext } from "react";

import Link from "next/link";
import context from "../../../../system/context/context";

const ClientHeader = ({ setIsSmallMenuOpen, isLoggedIn }: { setIsSmallMenuOpen?: Dispatch<SetStateAction<boolean>>, isLoggedIn?: boolean }) => {
    const contextContainer = useContext(context);

    
    return (
        <header id="header" className="z-9 shadow-xl">
            <div className="w-full flex justify-between bg-black py-3 haSection">
                <ul className="flex items-center gap-2">
                    <li>
                        <TiSocialFacebook className="text-white" size={20} />
                    </li>
                    <li>
                        <GrInstagram className="text-white" size={15} />
                    </li>
                    <li>
                        <FaXTwitter className="text-white" size={15} />
                    </li>
                </ul>
            </div>
            <div className="py-4 flex bg-white justify-center">
                <h2> Hamro <span className="text-[#ff9c85]">Awaaj</span> </h2>
            </div>
            {!isLoggedIn ? <ul className="hidden md:flex justify-center w-full z-9 py-3 gap-20 border-t-[2px] bg-white border-[#e7e7e7]">
                <li>
                    <Link href="#hero" className="mt-0 hover:text-primary"> Home </Link>
                </li>
                <li>
                    <Link href="#about" className="mt-0 hover:text-primary"> About </Link>
                </li>
                <li>
                    <Link href="#contact" className="mt-0 hover:text-primary"> Contact </Link>
                </li>
                <li>
                    <Link href="" className="mt-0 hover:text-primary">
                        <span className="flex gap-2 items-center" onClick={(e) => {
                            e.preventDefault();
                            contextContainer.setPopUpNumber(0);
                        }}>
                            <FaRegUserCircle />
                            Account
                        </span>
                    </Link>
                </li>
            </ul> :
                <ul className="hidden md:flex justify-center w-full z-9 py-3 gap-20 border-t-[2px] bg-white border-[#e7e7e7]">
                    <li>
                        <Link href="/user/upload" className="mt-0 hover:text-primary"> Upload </Link>
                    </li>
                    <li>
                        <Link href="/user/video-recorder" className="mt-0 hover:text-primary"> Realtime </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="mt-0 hover:text-primary"> Contact </Link>
                    </li>
                    <li>
                        <Link href="/user/account-info" className="mt-0 hover:text-primary">
                            <span className="flex gap-2 items-center">
                                <FaRegUserCircle />
                                Account
                            </span>
                        </Link>
                    </li>
                </ul>
            }

            <div className="md:hidden w-full py-3 px-5 border-t-[2px] border-[#e7e7e7] cursor-pointer" onClick={() => setIsSmallMenuOpen ? setIsSmallMenuOpen(true) : ""}>
                <RxHamburgerMenu size={30} />
            </div>

        </header>

    )
}
export default ClientHeader;  