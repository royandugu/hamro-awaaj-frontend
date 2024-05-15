"use client"

import { FormEvent, useState, useEffect, useContext } from "react";
import { universalJSONPost } from "../../../system/api/apiCallers";
import {IoIosInformationCircle} from "react-icons/io";
import Image from "next/image";

import GoogleIcon from "../../../../public/Google_Icons-09-512.webp";

import context from "../../../system/context/context";

import "../../user.css";

const Register = () => {
    const [retryPassword, setRetryPassword] = useState("");
    const [formDetails, setFormDetails] = useState({ userName: "", email: "", password: "", fullName: "" })
    const [errorDetails, setErrorDetails] = useState({ userName: { error: false, message: "" }, email: { error: false, message: "" }, password: { error: false, message: "" }, fullName: { error: false, message: "" }, rePassword:{error:false,message:""} });

    const contextContainer = useContext(context);

    const validateForm = () => {

        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let noMistakes = true;

        if (formDetails.fullName === "") {
            noMistakes = false;
            setErrorDetails(prevState => ({
                ...prevState,
                fullName: { error: true, message: "You must enter the first name" }
            }));
        }
        if (formDetails.email === "") {
            noMistakes = false;
            setErrorDetails(prevState => ({
                ...prevState,
                email: { error: true, message: "You must enter the first name" }
            }));
        }
        if (!emailRegEx.test(formDetails.email)) {
            noMistakes = false;
            setErrorDetails(prevState => ({
                ...prevState,
                email: { error: true, message: "You must enter the first name" }
            }));
        }
        if (formDetails.password === "") {
            noMistakes = false;
            setErrorDetails(prevState => ({
                ...prevState,
                password: { error: true, message: "You must enter the first name" }
            }));
        }
        if (formDetails.userName === "") {
            noMistakes = false;
            setErrorDetails(prevState => ({
                ...prevState,
                userName: { error: true, message: "You must enter the first name" }
            }));
        }
        if(formDetails.password !== retryPassword){
            noMistakes=false;
            setErrorDetails(prevState => ({
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
                username: formDetails.userName,
                password: formDetails.password,
                email: formDetails.email,
                fullName: formDetails.fullName
            }
            const res = await universalJSONPost(body, "user/register");
            console.log(res);
            if (res?.ok) contextContainer.setLoading(2);
            else contextContainer.setLoading(3);
        }
    }

    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])

    return (
        <>
            <h3 className="text-[30px] mb-5 font-bold"> Register your account </h3>
            <form className="loginAndRegisterForm" onSubmit={registerUser}>
                <div className="flex items-center gap-5 mt-[25px]">
                    <input type="text" value={formDetails.fullName} placeholder="Enter your full name" className={`${errorDetails.fullName.error ? 'border border-red-500' : 'border border-[rgb(225,225,225)]'} applyInputDesign rounded-xl outline-none`} onChange={(e) => {
                        setFormDetails({ ...formDetails, fullName: e.target.value })
                    }} />
                    <IoIosInformationCircle size={30} className={`opacity-50 hover:opacity-100 cursor-pointer ${errorDetails.fullName.error ? 'text-red-500':''}`}/>
                </div>
                
                <div className="flex items-center gap-3 mt-10 mb-10">
                    <input type="checkbox" className="cursor-pointer" />
                    <h3> I agree all statements in <span className="underline cursor-pointer"> Terms of service </span> </h3>
                </div>
                <button type="submit" className={`w-full bg-secondary flex justify-center items-center ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`}> {contextContainer.loading === 0 ? <img src="/spinner.svg" className="h-[50px] w-[50px]" /> : contextContainer.loading === 1 ? 'Register your account' : contextContainer.loading === 2 ? 'User registered sucesfully' : 'User registration failed'} </button>
                <button type="submit" className={`w-full bg-primary flex justify-center items-center ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`}> <Image src={GoogleIcon} alt="google-icon" className="w-[50px]" />  Login with google </button>

            </form>
        </>
    )
}
export default Register;