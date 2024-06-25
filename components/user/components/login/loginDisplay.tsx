"use client"

import { FormEvent, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { IoIosInformationCircle } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { signIn, useSession } from "next-auth/react";

import PrimaryButton from "../../../system/components/wrappers/primaryButton/primaryButton";
import SecondaryButton from "../../../system/components/wrappers/secondaryButton/secondaryButton";
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

    const router = useRouter();

    const sendLoginRequest = async (e: FormEvent) => {
        e.preventDefault();
        contextContainer.setLoading(0);
        try {
            const response = await signIn("credentials", {
                redirect: false, ...formDetails
            })
            if (response?.ok) {
                contextContainer.setLoading(2);
                const session: any = useSession();
                if (session?.data?.user?.role === "[ADMIN]") router.push("/admin/dashboard");
                else if (session?.data?.user?.role === "[USER]") router.push("/user/upload");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorDetails({ userName: { error: false, message: "" }, email: { error: false, message: "" }, password: { error: false, message: "" }, fullName: { error: false, message: "" }, rePassword: { error: false, message: "" } });
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    }


    return (
        <div className="popUpForms">
            <h4 className="mb-5 text-center sm:text-left normal-case"> Login your account </h4>
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

                        <IoIosInformationCircle title={errorDetails[rd.name].message !== "" ? errorDetails[rd.name].message : "" ?? ""} size={30} className={`opacity-50 hover:opacity-100 cursor-pointer ${errorDetails[rd.name].error ? 'text-red-500' : ''}`} />
                    </div>
                ))}
                <div className="flex items-center gap-3 my-5 mb-10">
                    <p className="smallPara cursor-pointer hover:underline"> Forgot password </p>
                </div>
                <PrimaryButton type="submit" classes="w-full mb-3" onClick={sendLoginRequest}>
                    {contextContainer.loading === 0 ? <img src="/spinner.svg" className="h-[50px] w-[50px]" /> : contextContainer.loading === 1 ? 'Login your account' : contextContainer.loading === 2 ? 'Logged in sucesfully, redirecting ...' : 'Login failed'}
                </PrimaryButton>
                <SecondaryButton type="submit" classes={`w-full mb-5 ${contextContainer.loading === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
                    Login with google
                </SecondaryButton>

                <div className="flex mb-5 justify-between fpAndNoAccountContainer">
                    <p className="cursor-pointer hover:underline smallPara" onClick={() => contextContainer.setPopUpNumber(1)}> Don&apos;t have an account ? </p>
                </div>
            </form>
            <Tooltip id="my-tooltip" />
        </div>
    )
}
export default Login;