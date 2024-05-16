"use client"

import { FormEvent, useState, useEffect, useContext } from "react";
import { universalJSONPost } from "../../../system/api/apiCallers";
import { IoIosInformationCircle } from "react-icons/io";
import { Tooltip } from "react-tooltip";

import Image from "next/image";

import GoogleIcon from "../../../../public/Google_Icons-09-512.webp";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import context from "../../../system/context/context";

import "../../user.css";

const registerData = [
    {
        placeholder: "Enter your full name",
        name: "fullName",
        type: "text"
    },
    {
        placeholder: "Enter your user name",
        name: "userName",
        type: "text"
    },
    {
        placeholder: "Enter your Email",
        name: "email",
        type: "text"
    },
    {
        placeholder: "Enter your password",
        name: "password",
        type: "password"
    }
]

const Register = () => {
    const [retryPassword, setRetryPassword] = useState("");
    const [formDetails, setFormDetails] = useState({ userName: [""], email: [""], password: [""], fullName: [""] })
    const [errorDetails, setErrorDetails] = useState<any>({ userName: { error: false, message: "" }, email: { error: false, message: "" }, password: { error: false, message: "" }, fullName: { error: false, message: "" }, rePassword: { error: false, message: "" } });
    const [passwordShown, setPasswordShown] = useState({ password: false, retry: false });

    const contextContainer = useContext(context);

    const validateForm = () => {

        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let noMistakes = true;

        if (formDetails.fullName[0] === "") {
            noMistakes = false;
            setErrorDetails((prevState: any) => ({
                ...prevState,
                fullName: { error: true, message: "You must enter the first name" }
            }));
        }
        if (formDetails.email[0] === "") {
            noMistakes = false;
            setErrorDetails((prevState: any) => ({
                ...prevState,
                email: { error: true, message: "You must enter the first name" }
            }));
        }
        if (!emailRegEx.test(formDetails.email[0])) {
            noMistakes = false;
            setErrorDetails((prevState: any) => ({
                ...prevState,
                email: { error: true, message: "You must enter the first name" }
            }));
        }
        if (formDetails.password[0] === "") {
            noMistakes = false;
            setErrorDetails((prevState: any) => ({
                ...prevState,
                password: { error: true, message: "You must enter the first name" }
            }));
        }
        if (formDetails.userName[0] === "") {
            noMistakes = false;
            setErrorDetails((prevState: any) => ({
                ...prevState,
                userName: { error: true, message: "You must enter the first name" }
            }));
        }
        if (formDetails.password[0] !== retryPassword) {
            noMistakes = false;
            setErrorDetails((prevState: any) => ({
                ...prevState,
                rePassword: { error: true, message: "Your re-entered password doesnot match with the entered password" }
            }));
        }
        return noMistakes;
    }

    const registerUser = async (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            contextContainer.setLoading(0);
            const body = {
                username: formDetails.userName[0],
                password: formDetails.password[0],
                email: formDetails.email[0],
                fullName: formDetails.fullName[0]
            }
            const res = await universalJSONPost(body, "user/register");
            if (res?.ok) contextContainer.setLoading(2);
            else contextContainer.setLoading(3);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorDetails({ userName: { error: false, message: "" }, email: { error: false, message: "" }, password: { error: false, message: "" }, fullName: { error: false, message: "" }, rePassword: { error: false, message: "" } });
        setFormDetails({ ...formDetails, [e.target.name]: [e.target.value] });
    }

    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])

    return (
        <>
            <h3 className="text-[30px] mb-5 font-bold"> Register your account </h3>
            <form className="loginAndRegisterForm" onSubmit={registerUser}>
                {registerData.map((rd, index) => (
                    <div key={index} className="flex relative items-center gap-5 mt-[25px]">
                        <input type={rd.type === "password" ? passwordShown.password ? "text" : "password" : rd.type} placeholder={rd.placeholder} name={rd.name} className={`${errorDetails[rd.name].error ? 'border border-red-500' : 'border border-[rgb(225,225,225)]'} applyInputDesign rounded-xl outline-none`} onChange={handleChange} />
                        {rd.type === "password" ? <div className="absolute top-5 right-[60px]" onClick={() => setPasswordShown(prevState => ({
                            password: !prevState.password,
                            retry: prevState.retry
                        }))}>
                            {!passwordShown.password ? <FaRegEye className="text-[rgb(100,100,100)] cursor-pointer" /> : <FaRegEyeSlash className="text-[rgb(100,100,100)] cursor-pointer" />}
                        </div> : ""}

                        <IoIosInformationCircle data-tip="ABC" size={30} className={`opacity-50 hover:opacity-100 cursor-pointer ${errorDetails.fullName.error ? 'text-red-500' : ''}`} />
                    </div>
                ))}
                <div className="flex relative items-center gap-5 mt-[25px]">
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


                    <IoIosInformationCircle data-tip="ABC" size={30} className={`opacity-50 hover:opacity-100 cursor-pointer ${errorDetails.fullName.error ? 'text-red-500' : ''}`} />
                </div>
                <div className="flex items-center gap-3 mt-10 mb-10">
                    <input type="checkbox" className="cursor-pointer" />
                    <h3> I agree all statements in <span className="underline cursor-pointer"> Terms of service </span> </h3>
                </div>
                <button type="submit" className={`w-full bg-secondary flex justify-center items-center ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`}> {contextContainer.loading === 0 ? <img src="/spinner.svg" className="h-[50px] w-[50px]" /> : contextContainer.loading === 1 ? 'Register your account' : contextContainer.loading === 2 ? 'User registered sucesfully' : 'User registration failed'} </button>
                <button type="submit" className={`w-full bg-primary flex justify-center items-center ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`}> <Image src={GoogleIcon} alt="google-icon" className="w-[50px]" />  Login with google </button>

            </form>
            <Tooltip className="my-tooltip" />
        </>
    )
}
export default Register;