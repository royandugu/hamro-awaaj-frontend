"use client"

import { ReactNode, useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import context from "../../../context/context";
import Spinner from "../../../sections/spinner/spinner";
import { universalJsonPostNoBody } from "../../../api/apiCallers";

const LoggedInNavigator = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    
    const router = useRouter();
    
    const contextContainer = useContext(context);

    // const getUserInfo = async (token: string) => {
    //     const res = await universalJsonPostNoBody("user/getDetails", token);
    //     const jsonResponse = await res?.json();

    //     if (jsonResponse?.role) {
    //         if (jsonResponse?.role === "USER") {
    //             contextContainer.setUserDetails(jsonResponse);
    //             router.push("/user/upload");
    //         }
    //         else if (jsonResponse?.role === "ADMIN") {
    //             contextContainer.setUserDetails(jsonResponse);
    //             router.push("/admin/dashboard");
    //         }
    //     }
    //     else setLoading(false);
    // }

    // useEffect(() => {
    //     if (contextContainer.userDetails?.role) {
    //         if (contextContainer.userDetails?.role === "USER") router.push("/user/upload");
    //         else if (contextContainer.userDetails?.role === "ADMIN") router.push("/admin/dashboard");
    //     }
    //     else {
    //         const token = localStorage?.getItem("jwt");
    //         if (token) getUserInfo(token);
    //         else setLoading(false);
    //     }
    // }, [])

    if (loading) return <Spinner />
    return (
        <>
            {children}
        </>
    )
}
export default LoggedInNavigator;