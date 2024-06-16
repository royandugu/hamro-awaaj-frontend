"use client"

import { useContext } from "react";
import { useRouter } from "next/navigation";

import SecondaryButton from "../../components/wrappers/secondaryButton/secondaryButton";
import context from "../../context/context";

const AccountPage = () => {
    const contextContainer=useContext(context);
    const router=useRouter();

    const logout=()=>{
        // localStorage.removeItem("jwt");
        // router.push("/");
    }

    return (
        <div className="border-[2px] border-[#eae9ee] rounded p-10 accountDisplay capitalize max-w-lg m-auto">
            <h6 className="text-[20px]"> Account details : </h6> 
            <form className="mt-10 dashedInputContainer">
                <label> Full name : </label><br />
                <input value={contextContainer?.userDetails?.fullName} type="text" className="rounded" disabled/><br />
                <label> Username : </label><br />
                <input value={contextContainer?.userDetails?.username} type="text" className="rounded" disabled/><br />
                <label> Email : </label><br />
                <input value={contextContainer?.userDetails?.email} type="text" className="rounded" disabled/><br />
                <div onClick={logout}>
                    <SecondaryButton>
                        Logout
                    </SecondaryButton>
                </div>
            </form>
        </div>
    )
}
export default AccountPage;