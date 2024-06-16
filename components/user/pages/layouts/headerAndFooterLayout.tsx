"use client"

import { ReactNode, useState } from "react";

import SmallMenuDesign from "../../sections/global/smallMenuDesign/smallMenuDesign";
import ClientHeader from "../../sections/global/header/header";
import ClientFooter from "../../sections/global/footer/footer";

const HeaderAndFooterLayout = ({ children, isLoggedIn }: { children: ReactNode, isLoggedIn?:boolean}) => {
    const [isSmallMeuOpen, setIsSmallMenuOpen] = useState(false);

    return (
        <>
            {!isSmallMeuOpen ? (
                <>
                    <ClientHeader setIsSmallMenuOpen={setIsSmallMenuOpen} isLoggedIn={isLoggedIn}/>
                    {children}
                    <ClientFooter />
                </>
            ) : (
                <SmallMenuDesign setIsSmallMenuOpen={setIsSmallMenuOpen}/>
            )}
        </>
    )
}
export default HeaderAndFooterLayout;