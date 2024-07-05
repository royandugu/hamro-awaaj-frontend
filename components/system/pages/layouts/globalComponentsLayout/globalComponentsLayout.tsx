"use client"

import { useContext, ReactNode } from "react";

import PopUpComponent from "../../../components/popUpComponent/popUpComponent";
import Login from "../../../../user/components/login/loginDisplay";
import context from "../../../context/context";
import Register from "../../../../user/components/register/registerDisplay";
import PopMessage from "../../../../user/components/popMessage/popMessage";
import EnterOtp from "../../../../user/components/enterOtp/enterOtp";
import EnterEmail from "../../../../user/components/enterEmail/enterEmail";
import EnterNewPassword from "../../../../user/components/enterNewPassword/enterNewPassword";
import EnterOtpForForgetPassword from "../../../../user/components/enterOtpForForgetPassword/enterOtpForForgetPassword";

const GlobalComponentsLayout = ({ children }: { children: ReactNode }) => {
    const contextContainer = useContext(context);

    return (
        <>
            {children}
            {contextContainer.popUpNumber !== -1 ? <PopUpComponent component={
                contextContainer.popUpNumber === 0 ? <Login /> : contextContainer.popUpNumber === 1 ? <Register /> : contextContainer.popUpNumber === 2 ? <PopMessage /> : contextContainer.popUpNumber === 3 ? <EnterOtp/> : contextContainer.popUpNumber === 4 ? <EnterEmail/> : contextContainer.popUpNumber === 5 ? <EnterOtpForForgetPassword/> : contextContainer.popUpNumber === 6 ? <EnterNewPassword/> : <></>
            } /> : ""}
        </>
    )
}
export default GlobalComponentsLayout;