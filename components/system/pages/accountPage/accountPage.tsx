"use client"

import { useContext } from "react";
import { signOut } from "next-auth/react";

import SecondaryButton from "../../components/wrappers/secondaryButton/secondaryButton";
import context from "../../context/context";

const AccountPage = () => {
    const contextContainer=useContext(context);

    const logout=async (e:any)=>{
        try{
            e.preventDefault();
            await signOut({callbackUrl:"/"});
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="border-[2px] border-[#eae9ee] rounded p-10 accountDisplay capitalize max-w-lg m-auto">
            <h6 className="text-[20px]"> Account details : </h6> 
            <form className="mt-10 dashedInputContainer">
                <label> Full name : </label><br />
                <input type="text" className="rounded" disabled/><br />
                <label> Username : </label><br />
                <input type="text" className="rounded" disabled/><br />
                <label> Email : </label><br />
                <input type="text" className="rounded" disabled/><br />
                <div onClick={logout}>
                    <SecondaryButton classes="w-full" onClick={logout}>
                        Logout 
                    </SecondaryButton>
                </div>
            </form>
        </div>
    )
}
export default AccountPage;