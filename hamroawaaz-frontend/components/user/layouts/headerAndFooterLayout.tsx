"use client"

import { ReactNode, useState } from "react";

import SmallMenuDesign from "../../system/smallMenuDesign/smallMenuDesign";
import ClientHeader from "../sections/header/header";
import ClientFooter from "../sections/footer/footer";

import "./headerAndFooterLayout.css";

const HeaderAndFooterLayout = ({ children }: { children: ReactNode }) => {
    const [isSmallMeuOpen,setIsSmallMenuOpen]=useState(false);
    
    return (
        <>
            <ClientHeader setIsSmallMenuOpen={setIsSmallMenuOpen}/>
            {children}
            <ClientFooter /> 
            <div className={`smallMenu fixed inset-0 bg-[#1c2434] ${isSmallMeuOpen ? 'active' : ''}`}>
                <SmallMenuDesign setIsSmallMenuOpen={setIsSmallMenuOpen}/>
            </div>
        </>
    )
}
export default HeaderAndFooterLayout;