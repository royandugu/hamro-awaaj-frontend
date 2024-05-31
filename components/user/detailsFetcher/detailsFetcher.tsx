"use client"

import { ReactNode, useEffect, useState } from "react";
import { useContext } from "react";
import { universalJsonPostNoBody } from "../../system/api/apiCallers";
import { useRouter } from "next/navigation";

import context from "../../system/context/context";
import Spinner from "../../system/spinner/spinner";

const DetailsFetcher = ({ children }: { children: ReactNode }) => {
    const contextContainer = useContext(context);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    const getUserInfo = async (token: string) => {
        const res = await universalJsonPostNoBody("user/getDetails", token);
        const jsonResponse = await res?.json();

        if (jsonResponse?.role && jsonResponse?.role === "USER") {
            contextContainer.setUserDetails(jsonResponse);
            setLoading(false);
        }
        else router.push("/");
    }

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) getUserInfo(token);
        else router.push("/");
    }, [])


    if (loading) return <Spinner />
    return (
        <>
            {children}
        </>
    )
}
export default DetailsFetcher;