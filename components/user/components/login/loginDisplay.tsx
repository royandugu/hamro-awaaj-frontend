"use client"

import { FormEvent, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { IoIosInformationCircle } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { signIn } from "next-auth/react";

import PrimaryButton from "../../../system/components/wrappers/primaryButton/primaryButton";
import context from "../../../system/context/context";

const registerData = [ 
    {
        placeholder: "Enter your Email",
        name: "email",
        type: "text",
    },
    {
        placeholder: "Enter your password",
        name: "password",
        type: "password",
    }
]

const Login = () => {
    const [formDetails, setFormDetails] = useState({ email: "", password: "" })
    const [errorDetails, setErrorDetails] = useState<any>({ email: { error: false, message: "" }, password: { error: false, message: "" } });
    const [passwordShown, setPasswordShown] = useState({ password: false, retry: false });

    const contextContainer = useContext(context);
    
    const router=useRouter();

    const sendLoginRequest = async (e: FormEvent) => {
        e.preventDefault();
        contextContainer.setLoading(0);
        const response=await signIn("credentials",{
           redirect:false, ...formDetails
        })
        if (response?.ok) router.push("/admin/dashboard");
    }

    // const validateForm = () => {

    //     const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     let noMistakes = true;


    //     if (formDetails.email[0] === "") {
    //         noMistakes = false;
    //         setErrorDetails((prevState: any) => ({
    //             ...prevState,
    //             email: { error: true, message: "You must enter your email" }
    //         }));
    //     }
    //     if (!emailRegEx.test(formDetails.email[0])) {
    //         noMistakes = false;
    //         setErrorDetails((prevState: any) => ({
    //             ...prevState,
    //             email: { error: true, message: "You must enter your email" }
    //         }));
    //     }
    //     if (formDetails.password[0] === "") {
    //         noMistakes = false;
    //         setErrorDetails((prevState: any) => ({
    //             ...prevState,
    //             password: { error: true, message: "Make sure your password contains a capital letter, a small letter, a number and special symbols reaching minimum of 8 characters" }
    //         }));
    //     }
    //     return noMistakes;
    // }


    // const loginUser = async (e: FormEvent) => {
    //     contextContainer.setLoading(0);
            
    //     e.preventDefault();
    //     if (validateForm()) {
    //         const body = {
    //             password: formDetails.password[0],
    //             email: formDetails.email[0],
    //         }
    //         const res = await universalJSONPost(body, "loginCustom");
    //         const jsonResponse=await res?.json();
            
    //         if (jsonResponse.response === "SUCCESS") {
    //             contextContainer.setLoading(2);
    //             if(localStorage) {
    //                 localStorage.setItem("refreshToken", jsonResponse?.refreshToken ?? "");
    //                 localStorage.setItem("jwt",jsonResponse?.jwt ?? "");
    //             }
    //             router.push("/user/upload");
    //         }
    //         else contextContainer.setLoading(3);
    //     }
    // }
    
    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorDetails({ userName: { error: false, message: "" }, email: { error: false, message: "" }, password: { error: false, message: "" }, fullName: { error: false, message: "" }, rePassword: { error: false, message: "" } });
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    }


    return (
        <div className="popUpForms">
            <h5 className="mb-5 text-center sm:text-left"> Login your account ... </h5>
            <form className="normalInputContainer">
                {registerData.map((rd, index) => (
                    <div key={index} className="flex relative items-center gap-5 mt-[25px]">
                        <input type={rd.type === "password" ? passwordShown.password ? "text" : "password" : rd.type} placeholder={rd.placeholder} name={rd.name} className={`${errorDetails[rd.name].error ? 'border border-red-500' : 'border border-[rgb(225,225,225)]'} applyInputDesign rounded-xl outline-none`} onChange={handleChange} />
                        {rd.type === "password" ? <div className="absolute top-5 right-[60px]" onClick={() => setPasswordShown(prevState => ({
                            password: !prevState.password,
                            retry: prevState.retry
                        }))}>
                            {!passwordShown.password ? <FaRegEye className="text-[rgb(100,100,100)] cursor-pointer" /> : <FaRegEyeSlash className="text-[rgb(100,100,100)] cursor-pointer" />}
                        </div> : ""}

                        <IoIosInformationCircle title={errorDetails[rd.name].message !== "" ? errorDetails[rd.name].message : "" ?? ""} size={30} className={`${errorDetails[rd.name].message === "" ? "invisible" : ""} opacity-50 hover:opacity-100 cursor-pointer ${errorDetails[rd.name].error ? 'text-red-500' : ''}`} />
                    </div>
                ))}
                <div className="flex items-center gap-3 my-5 mb-10">
                    <input type="checkbox" className="cursor-pointer" />
                    <p> Remember me  </p>
                </div>
                <PrimaryButton type="submit" classes="w-full" onClick={sendLoginRequest}>
                {contextContainer.loading === 0 ? <img src="/spinner.svg" className="h-[50px] w-[50px]" /> : contextContainer.loading === 1 ? 'Login your account' : contextContainer.loading === 2 ? 'Logged in sucesfully, redirecting ...' : 'Login failed'} 
                </PrimaryButton>
                
                <div className="flex mt-5 mb-5 justify-between fpAndNoAccountContainer">
                    <p className="cursor-pointer hover:underline" onClick={() => contextContainer.setPopUpNumber(1)}> Don&apos;t have an account ? </p>
                </div>
            </form>
            <Tooltip id="my-tooltip" />
        </div>
    )
}
export default Login;