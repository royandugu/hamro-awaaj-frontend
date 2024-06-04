"use client"

import { useState, useContext } from "react";
import { ReactNode } from "react";
import PopUpComponent from "../popUpComponent/popUpComponent";
import Login from "../../user/pages/login/loginDisplay";
import context from "../context/context";
import Register from "../../user/pages/register/registerDisplay";

const GlobalComponentsLayout=({children}:{children:ReactNode})=>{
    const contextContainer=useContext(context);

    return(
        <>
            {children}
            {contextContainer.popUpNumber!==-1 ? <PopUpComponent component={
                contextContainer.popUpNumber === 0 ? <Login/> : <Register/>
            }/> : ""}
        </>
    )
}
export default GlobalComponentsLayout;