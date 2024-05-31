"use client"

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import context from "../../system/context/context";
import { universalJsonPostNoBody } from "../../system/api/apiCallers";
import { useEffect } from "react";

import Spinner from "../../system/spinner/spinner";

const AdminValidator=({children}:{children:ReactNode})=>{
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const contextContainer = useContext(context);

    const getUserInfo = async (token: string) => {
        const res = await universalJsonPostNoBody("user/getDetails", token);
        const jsonResponse = await res?.json();

        if (jsonResponse?.role) {
            if (jsonResponse?.role === "USER") {
                contextContainer.setUserDetails(jsonResponse);
                router.push("/user/upload");
            }
            else if (jsonResponse?.role === "ADMIN") {
                contextContainer.setUserDetails(jsonResponse);
                setLoading(false);
            }
        }
        else router.push("/");
    }

    useEffect(() => {
        if (contextContainer.userDetails?.role) {
            if (contextContainer.userDetails?.role === "USER") router.push("/user/upload");
            else if (contextContainer.userDetails?.role === "ADMIN") setLoading(false);
        }
        else {
            const token = localStorage?.getItem("jwt");
            if (token) getUserInfo(token);
            else router.push("/");
        }
    }, [])

    if (loading) return <Spinner />
    
    return(
        <>
            {children}
        </>
    )
}
export default AdminValidator;