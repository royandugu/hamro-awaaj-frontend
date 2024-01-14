"use client"

import { FormEvent, useState } from "react";

import "../user.css"

const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retryPassword, setRetryPassword] = useState("");

    const registerUser = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <>
            <h1 className="uppercase font-bold text-center mb-10 text-[30px]"> Create account </h1>
            <form className="loginAndRegisterForm" onSubmit={registerUser}>
                <input type="text" value={userName} placeholder="Enter username" className="applyInputDesign rounded-xl outline-none" onChange={(e) => setUserName(e.target.value)} /><br />
                <input type="email" value={email} placeholder="Enter Email" className="applyInputDesign rounded-xl outline-none" onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" value={password} placeholder="Enter password" className="applyInputDesign rounded-xl outline-none" onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="password" value={retryPassword} placeholder="Re-enter password" className="applyInputDesign rounded-xl outline-none" onChange={(e) => setRetryPassword(e.target.value)} /><br />
                <div className="flex items-center gap-3 mt-10 mb-5">
                    <input type="checkbox" className="cursor-pointer"/>
                    <h5> I agree all statements in <span className="underline cursor-pointer"> Terms of service </span> </h5>
                </div>
                <button type="submit" className="w-full bg-primary text-white rounded"> Register user </button>
            </form>
            <h1 className="text-center mt-20"> Already have an account ? <span className="underline font-bold cursor-pointer"> Login here </span></h1>
        </>
    )
}
export default Register;