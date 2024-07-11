"use client"

import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { Dispatch, SetStateAction, useContext } from "react";
import { usePathname } from 'next/navigation';


import Link from "next/link";
import context from "../../../../system/context/context";

const ClientHeader = ({ setIsSmallMenuOpen, isLoggedIn }: { setIsSmallMenuOpen?: Dispatch<SetStateAction<boolean>>, isLoggedIn?: boolean }) => {
    const contextContainer = useContext(context);
    const pathname = usePathname();

    return (
        <header id="header" className="z-9 fixed top-0 left-0 right-0">
            {/* <div className="w-full flex bg-black py-3 pl-[15%]">
                <div className="haContainer">
                    <ul className="flex items-center gap-2">
                        <li>
                            <Link href="#"><TiSocialFacebook className="text-white" size={20} /></Link>
                        </li>
                        <li>
                            <Link href="#"><GrInstagram className="text-white" size={15} /></Link>
                        </li>
                        <li>
                            <Link href="#"><FaXTwitter className="text-white" size={15} /></Link>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="py-7 z-9 flex bg-[#1c2434] text-white items-center justify-between pl-[5%] pr-[5%] md:pl-[15%] md:pr-[15%]">
                <div>
                    <img src="/Hamro(3)-Photoroom(1).png" className="w-[200px]" />
                </div>
                <div>
                    {!isLoggedIn ? <ul className="hidden lg:flex justify-end w-full gap-20">
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
                        <ul className="hidden lg:flex items-center justify-end w-full gap-20">
                            <li>
                                <Link href="/user/upload" className={`mt-0 hover:text-primary ${pathname === '/user/upload' ? 'text-primary' : ''}`}> Upload </Link>
                            </li>
                            <li>
                                <Link href="/user/video-recorder" className={`mt-0 hover:text-primary ${pathname === '/user/video-recorder' ? 'text-primary' : ''}`}> Realtime </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="mt-0 hover:text-primary"> Contact </Link>
                            </li>
                            <li>
                                <Link href="/user/account-info" className="mt-0 hover:text-primary">
                                    <span className="flex gap-2 items-center">
                                        <FaRegUserCircle size={25} />

                                    </span>
                                </Link>
                            </li>
                        </ul>
                    }
                    <div className="lg:hidden w-full px-5 cursor-pointer" onClick={() => setIsSmallMenuOpen ? setIsSmallMenuOpen(true) : ""}>
                        <RxHamburgerMenu size={30} />
                    </div>
                </div>
            </div>


        </header>

    )
}
export default ClientHeader;  