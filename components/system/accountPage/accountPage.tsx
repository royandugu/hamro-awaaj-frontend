"use client"

import PrimaryButton from "../primaryButton/primaryButton";
import context from "../context/context";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import "./accountPage.css";

const AccountPage = () => {
    const contextContainer=useContext(context);
    const router=useRouter();

    const logout=()=>{
        // localStorage.removeItem("jwt");
        // router.push("/");
    }

    return (
        <section className="border-[2px] border-[#eae9ee] rounded p-10 accountDisplay capitalize max-w-lg m-auto">
            <h6> Account details : </h6>
            <form className="mt-10">
                <label> Full name : </label><br />
                <input value={contextContainer?.userDetails?.fullName} type="text" className="rounded" disabled/><br />
                <label> Username : </label><br />
                <input value={contextContainer?.userDetails?.username} type="text" className="rounded" disabled/><br />
                <label> Email : </label><br />
                <input value={contextContainer?.userDetails?.email} type="text" className="rounded" disabled/><br />
                <div onClick={logout}><PrimaryButton text="Logout" classes="capitalize mt-3 w-full text-white" customColor="[#1c2434]"/></div>
            </form>
        </section>
    )
}
export default AccountPage;