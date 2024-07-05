"use client"

import { useContext, useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { universalProtectedGet } from "../../api/apiCallers";
import { useSession } from "next-auth/react";
import { FaPencil } from "react-icons/fa6";
import { universalJSONPut } from "../../api/apiCallers";

import context from "../../context/context";

import Spinner from "../../sections/spinner/spinner";
import SecondaryButton from "../../components/wrappers/secondaryButton/secondaryButton";
import PrimaryButton from "../../components/wrappers/primaryButton/primaryButton";

const AccountPage = () => {
    const [loading,setLoading]=useState(true);
    const [formData, setFormData] = useState<{ fullName: string, username: string, email: string }>({ fullName: "", username: "", email: "" })

    const contextContainer = useContext(context);

    const session: any = useSession();

    useEffect(()=>{
        contextContainer.setLoading(1);
    },[])

    useEffect(() => {
        const getUserDetails=async ()=>{
            const response: any = await universalProtectedGet("user/getDetails", session?.data?.accessToken);
            setFormData({ fullName: response?.fullName, username: response?.username, email: response?.email })
            setLoading(false);
        }
        if(session && session?.data?.accessToken) getUserDetails();
    }, [session])


    const logout = async (e: any) => {
        try {
            e.preventDefault();
            await signOut({ callbackUrl: "/" });
        }
        catch (err) {
            console.log(err);
        }
    }

    const updateAccount = async (e: any) => {
        e.preventDefault();
        contextContainer.setLoading(0);
        const updateResponse = await universalJSONPut(formData, "user/updateUserDetails", session?.data?.accessToken);
        if (updateResponse) {
            const jsonResponse = await updateResponse.json();
            if (jsonResponse.response === "success") contextContainer.setLoading(2);
            else contextContainer.setLoading(3)
        }
        else contextContainer.setLoading(3);
    }

    if(loading) return <Spinner/>
    else
    return (
        <div className="md:border-[2px] md:border-[#eae9ee] rounded p-0 pl-10 pr-10 md:p-10 accountDisplay capitalize max-w-lg m-auto">
            <h6 className="text-[20px]"> Account details : </h6>
            <form className="mt-10 dashedInputContainer">
                <div className="relative">
                    <label> Full name : </label><br />
                    <input type="text" className="rounded" value={formData.fullName ?? ""} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
                    <FaPencil className="absolute top-[30px] right-0 text-[rgb(150,150,150)]" />
                </div>
                <div className="relative">
                    <label> Username : </label><br />
                    <input type="text" className="rounded" value={formData.username ?? ""} onChange={(e) => setFormData({ ...formData, username: e.target.value })} /><br />
                    <FaPencil className="absolute top-[30px] right-0 text-[rgb(150,150,150)]" />
                </div>
                <div className="relative">
                    <label> Email : </label><br />
                    <input type="text" className="rounded" value={formData?.email ?? ""} disabled /><br />
                </div>

                <PrimaryButton classes="w-full mb-3" onClick={updateAccount}>
                    {contextContainer.loading === 0 ? <img src="/spinner.svg" className="h-[40px] w-[40px]" /> : contextContainer.loading === 1 ? "Update account" : contextContainer.loading === 2 ? "Updated sucesfully" : "Failed to update"}
                </PrimaryButton>
                <SecondaryButton classes="w-full" onClick={logout}>
                    Logout
                </SecondaryButton>

            </form>
        </div>
    )

}
export default AccountPage;