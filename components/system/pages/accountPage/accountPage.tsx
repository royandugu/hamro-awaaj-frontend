"use client"

import { useContext } from "react";
import { signOut } from "next-auth/react";
import { useQuery } from "react-query";
import { universalProtectedGet } from "../../api/apiCallers";
import { useSession } from "next-auth/react";

import Spinner from "../../sections/spinner/spinner";
import SecondaryButton from "../../components/wrappers/secondaryButton/secondaryButton";
import context from "../../context/context";

const AccountPage = () => {
    const session:any=useSession();

    const {data,status}=useQuery("account-info",()=>universalProtectedGet("user/getDetails",session?.data?.accessToken));
    console.log(data);
    
    const logout=async (e:any)=>{
        try{
            e.preventDefault();
            await signOut({callbackUrl:"/"});
        }
        catch(err){
            console.log(err);
        }
    }

    if(status === "loading") return <Spinner/>
    return (
        <div className="border-[2px] border-[#eae9ee] rounded p-10 accountDisplay capitalize max-w-lg m-auto">
            <h6 className="text-[20px]"> Account details : </h6> 
            <form className="mt-10 dashedInputContainer">
                <label> Full name : </label><br />
                <input type="text" className="rounded" value={data?.fullName??""} disabled/><br />
                <label> Username : </label><br />
                <input type="text" className="rounded" value={data?.username??""} disabled/><br />
                <label> Email : </label><br />
                <input type="text" className="rounded" value={data?.email??""} disabled/><br />
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