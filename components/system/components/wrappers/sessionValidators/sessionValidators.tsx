"use client"

import { ReactNode, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Spinner from "../../../sections/spinner/spinner";

const SessionValidators = ({ children, roleToValidate }: { children: ReactNode, roleToValidate: string }) => {
    const [loading, setLoading] = useState(true)
    const router = useRouter();
    const session: any = useSession();

    useEffect(() => {
        if (roleToValidate) {
            if (session.status === "loading") setLoading(true);
            else if (session.status === "unauthenticated") router.push("/");
            else if (session.status === "authenticated") {
                if (session?.data?.user?.role === roleToValidate) setLoading(false);
                else router.push("/");
            }
        }
    }, [session])

    if (loading) return <Spinner />
    else {
        return (
            <>
                {children}
            </>
        )
    }
}
export default SessionValidators;