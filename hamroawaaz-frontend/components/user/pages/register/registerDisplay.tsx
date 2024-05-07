"use client"

import { FormEvent, useState, useEffect, useContext } from "react";
import { universalJSONPost } from "../../../system/api/apiCallers";

import context from "../../../system/context/context";

import "../../user.css";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retryPassword, setRetryPassword] = useState("");
    const [fullName, setFullName]=useState("");

    const contextContainer=useContext(context);

    const registerUser = async (e: FormEvent) => {
        e.preventDefault();
        contextContainer.setLoading(0);
        const body={
            username:userName,
            password:password,
            email:email,
            fullName:fullName
        }
        console.log(body);
        const res=await universalJSONPost(body,"user/register");
        console.log(res);
        if(res?.ok) contextContainer.setLoading(2);
        else contextContainer.setLoading(3);
    }

    useEffect(()=>{
        contextContainer.setLoading(1);
    },[])


    return (
        <main>
            <h1 className="uppercase font-bold text-center mb-10 text-[30px]"> Create account </h1>
            <form className="loginAndRegisterForm" onSubmit={registerUser}>
                <input type="text" value={fullName} placeholder="Enter username" className="applyInputDesign rounded-xl outline-none" onChange={(e) => setFullName(e.target.value)} /><br />
                <input type="text" value={userName} placeholder="Enter username" className="applyInputDesign rounded-xl outline-none" onChange={(e) => setUserName(e.target.value)} /><br />
                <input type="email" value={email} placeholder="Enter Email" className="applyInputDesign rounded-xl outline-none" onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" value={password} placeholder="Enter password" className="applyInputDesign rounded-xl outline-none" onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="password" value={retryPassword} placeholder="Re-enter password" className="applyInputDesign rounded-xl outline-none" onChange={(e) => setRetryPassword(e.target.value)} /><br />
                <div className="flex items-center gap-3 mt-10 mb-5">
                    <input type="checkbox" className="cursor-pointer"/>
                    <h5> I agree all statements in <span className="underline cursor-pointer"> Terms of service </span> </h5>
                </div>
                <button type="submit" className={`w-full bg-primary mt-10 flex justify-center items-center ${contextContainer.loading === 0 && 'opacity-50 pointer-events-none'} text-white rounded`}> {contextContainer.loading === 0 ? <img src="/spinner.svg" className="h-[50px] w-[50px]"/> : contextContainer.loading === 1 ? 'Register user' : contextContainer.loading === 2 ? 'User registered sucesfully' : 'User registration failed'} </button>
            </form>
            <h1 className="text-center mt-15"> Already have an account ? <span className="underline font-bold cursor-pointer"> Login here </span></h1>
        </main>
    )
} 
export default Register;