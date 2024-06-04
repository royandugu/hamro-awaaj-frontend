"use client"

import { ReactNode, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import SmallMenuDesign from "../../system/smallMenuDesign/smallMenuDesign";
import ClientHeader from "../sections/header/header";
import ClientFooter from "../sections/footer/footer";
import Link from "next/link";
import Register from "../pages/register/registerDisplay";
import Login from "../pages/login/loginDisplay";

import "./headerAndFooterLayout.css";

const HeaderAndFooterLayout = ({ children, isLoggedIn }: { children: ReactNode, isLoggedIn?:boolean}) => {
    const [isSmallMeuOpen, setIsSmallMenuOpen] = useState(false);
    const [popUpNumber,setPopUpNumber]=useState(-1);

    return (
        <>
            {!isSmallMeuOpen ? (
                <>
                    <ClientHeader setIsSmallMenuOpen={setIsSmallMenuOpen} isLoggedIn={isLoggedIn}/>
                    {children}
                    <ClientFooter />
                </>
            ) : (
                <></>
            )}
            <section className="p-0">
                <Link href="#header" className="bg-primary p-5 rounded-full fixed right-[40px] bottom-[40px] opacity-75 hover:opacity-100">
                    <FaArrowUp className="text-white text-[20px] sm:text-[30px]"/>
                </Link>
            </section>

            <section className={`smallMenu p-0 fixed inset-0 bg-[#1c2434] ${isSmallMeuOpen ? 'active' : ''}`}>
                <SmallMenuDesign setIsSmallMenuOpen={setIsSmallMenuOpen} setPopUpNumber={setPopUpNumber}/>
            </section>
        </>
    )
}
export default HeaderAndFooterLayout;