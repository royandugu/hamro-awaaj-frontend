"use client"

import { useContext,ReactNode } from "react";

import PopUpComponent from "../../../components/popUpComponent/popUpComponent";
import Login from "../../../../user/components/login/loginDisplay";
import context from "../../../context/context";
import Register from "../../../../user/components/register/registerDisplay";
import PopMessage from "../../../../user/components/popMessage/popMessage";

const GlobalComponentsLayout=({children}:{children:ReactNode})=>{
    const contextContainer=useContext(context);

    console.log(contextContainer.popUpNumber)
    return(
        <>
            {children}
            {contextContainer.popUpNumber!==-1 ? <PopUpComponent component={
                contextContainer.popUpNumber === 0 ? <Login/> : contextContainer.popUpNumber === 1 ? <Register/> : contextContainer.popUpNumber === 2 ? <PopMessage/> : <></>
            }/> : ""}
        </>
    )
}
export default GlobalComponentsLayout;