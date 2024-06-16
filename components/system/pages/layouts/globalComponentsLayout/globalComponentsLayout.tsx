"use client"

import { useContext,ReactNode } from "react";

import PopUpComponent from "../../../components/popUpComponent/popUpComponent";
import Login from "../../../../user/components/login/loginDisplay";
import context from "../../../context/context";
import Register from "../../../../user/components/register/registerDisplay";

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