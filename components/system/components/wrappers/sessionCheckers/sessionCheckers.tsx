"use client"

import { ReactNode, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Spinner from "../../../sections/spinner/spinner";

const SessionCheckers = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true);
    
    const session:any = useSession();
    const router=useRouter();

    useEffect(()=>{
        if (session.status === "loading") setLoading(true);
        if(session?.data?.user?.role === "[ADMIN]") router.push("/admin/dashboard");
        else if(session?.data?.user?.role === "[USER]") router.push("/user/upload");
        else if(session?.status === "unauthenticated") setLoading(false);
    },[session])
 
    if (loading) return <Spinner />
    else {
        return (
            <>
                {children}
            </>
        )
    }
}

export default SessionCheckers;