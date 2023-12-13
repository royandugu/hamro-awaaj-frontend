"use client"

import { FormEvent, useState } from "react";

const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [retryPassword,setRetryPassword]=useState("");

    const registerUser=(e:FormEvent)=>{
        e.preventDefault();
    }

    return (
        <form className="loginAndRegisterForm" onSubmit={registerUser}>
            <input type="text" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/><br/>
            <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="password" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <input type="password" value={retryPassword} placeholder="Re-enter password" onChange={(e)=>setRetryPassword(e.target.value)}/><br/>
            <button type="submit"> Register user </button>
        </form>
    )
}
export default Register;