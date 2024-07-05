"use client"

import { FormEvent, useState, useEffect, useContext } from "react";
import { universalJSONPost } from "../../../system/api/apiCallers";
import { IoIosInformationCircle } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";

import PrimaryButton from "../../../system/components/wrappers/primaryButton/primaryButton";
import context from "../../../system/context/context";

const registerData = [
    {
        placeholder: "Enter your password",
        name: "password",
        type: "password",
        validateText: "Minimum of 8 letters, both capital and small letters along with a number and a special character"
    }
]

const EnterNewPassword = () => {
    const [retryPassword, setRetryPassword] = useState("");
    const [formDetails, setFormDetails] = useState({ password: [""] })
    const [errorDetails, setErrorDetails] = useState<any>({ password: { error: false, message: "" }, rePassword: { error: false, message: "" } });
    const [passwordShown, setPasswordShown] = useState({ password: false, retry: false });
    
    const contextContainer = useContext(context);
    
    
    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])
    
    const validateForm = () => {

        let noMistakes = true;

        if (formDetails.password[0] === "" || formDetails.password[0].length < 8) {
            noMistakes = false;
            setErrorDetails((prevState: any) => ({
                ...prevState,
                password: { error: true, message: "Make sure your passwords have minimum of 8 characters" }
            }));
        }
        if (formDetails.password[0] !== retryPassword) {
            noMistakes = false;
            setErrorDetails((prevState: any) => ({
                ...prevState,
                rePassword: { error: true, message: "Your re entered password does not match with your password" }
            }));
        }
        return noMistakes;
    }


    const changePassword = async (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            contextContainer.setLoading(0);
            const body = {
                newPassword: formDetails.password[0],
            }
            console.log(contextContainer.popButtonLabel.actionData);
            const res: any = await universalJSONPost(body, `register/change_password/${contextContainer.popButtonLabel.actionData}`);
            const data = await res.text();

            console.log(data);
            
            if (data.toString() === '"SUCCESS"') {
                contextContainer.setLoading(1);
                contextContainer.setPopUpNumber(0);
            }
            else contextContainer.setLoading(3);

        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorDetails({ userName: { error: false, message: "" }, email: { error: false, message: "" }, password: { error: false, message: "" }, fullName: { error: false, message: "" }, rePassword: { error: false, message: "" } });
        setFormDetails({ ...formDetails, [e.target.name]: [e.target.value] });
    }
    

    return (
        <>
            <p className="mb-5 text-center sm:text-left normal-case"> Change your password </p>
            <form className="normalInputContainer" onSubmit={changePassword}>
                {registerData.map((rd, index) => (
                    <div key={index} className="flex relative items-center gap-5 mt-[25px]">
                        <input type={rd.type === "password" ? passwordShown.password ? "text" : "password" : rd.type} placeholder={rd.placeholder} name={rd.name} className={`${errorDetails[rd.name].error ? 'border border-red-500' : 'border border-[rgb(225,225,225)]'} applyInputDesign rounded-xl outline-none`} onChange={handleChange} />
                        {rd.type === "password" ? <div className="absolute top-5 right-[60px]" onClick={() => setPasswordShown(prevState => ({
                            password: !prevState.password,
                            retry: prevState.retry
                        }))}>
                            {!passwordShown.password ? <FaRegEye className="text-[rgb(100,100,100)] cursor-pointer" /> : <FaRegEyeSlash className="text-[rgb(100,100,100)] cursor-pointer" />}
                        </div> : ""}

                        <IoIosInformationCircle title={errorDetails[rd.name].message !== "" ? errorDetails[rd.name].message : rd.validateText ?? ""} size={30} className={`${(!rd.validateText && errorDetails[rd.name].message === "") ? "invisible" : ""} opacity-50 hover:opacity-100 cursor-pointer ${errorDetails[rd.name].error ? 'text-red-500' : ''}`} />
                    </div>
                ))}
                <div className="flex relative items-center gap-5 mt-[25px] mb-10">
                    <input type={passwordShown.retry ? 'text' : 'password'} placeholder="Re enter your password" className={`${errorDetails["rePassword"].error ? 'border border-red-500' : 'border border-[rgb(225,225,225)]'} applyInputDesign rounded-xl outline-none`} onChange={(e: any) => {
                        setErrorDetails({ userName: { error: false, message: "" }, email: { error: false, message: "" }, password: { error: false, message: "" }, fullName: { error: false, message: "" }, rePassword: { error: false, message: "" } });
                        setRetryPassword(e.target.value);
                    }} />
                    <div className="absolute top-5 right-[60px]" onClick={() => setPasswordShown(prevState => ({
                        password: prevState.password,
                        retry: !prevState.retry
                    }))}>
                        {!passwordShown.retry ? <FaRegEye className="text-[rgb(100,100,100)] cursor-pointer" /> : <FaRegEyeSlash className="text-[rgb(100,100,100)] cursor-pointer" />}
                    </div>

                    {<IoIosInformationCircle title={errorDetails?.rePassword?.message ?? ""} size={30} className={`${errorDetails?.rePassword?.message === "" ? 'invisible ' : ''} opacity-50 hover:opacity-100 cursor-pointer ${errorDetails?.fullName?.error ? 'text-red-500' : ''}`} />}
                </div>
               
                <PrimaryButton type="submit" classes={`w-full flex justify-center items-center mb-3 h-[64px] ${contextContainer.loading === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
                    {contextContainer.loading === 0 ? <img src="/spinner.svg" className="h-[50px] w-[50px]" /> : contextContainer.loading === 1 ? 'Change your password' : contextContainer.loading === 2 ? 'Password changed sucesfully, redirecting ...' : 'Password changing failed'}
                </PrimaryButton>
                {/* <SecondaryButton type="submit" classes={`w-full mb-5 ${contextContainer.loading === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
                    Login with google
                </SecondaryButton> */}

            </form>
            <Tooltip id="my-tooltip" />
        </>
    )
}
export default EnterNewPassword;