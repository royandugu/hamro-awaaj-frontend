"use client"

import { useContext } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { universalDelete } from "../../../system/api/apiCallers";
import { useSession } from "next-auth/react";

import Spinner from "../../../system/sections/spinner/spinner";
import context from "../../../system/context/context";
import PrimaryButton from "../../../system/components/wrappers/primaryButton/primaryButton";

const PopMessage = () => {
    const contextContainer = useContext(context);

    const session: any = useSession();

    return (
        <div className="pt-5 pb-5">
            <IoWarningOutline size={130} className="text-red-400 m-auto mb-10" />
            <p className="mb-5"> {contextContainer.popMessage.textMessage} </p>
            <PrimaryButton classes="w-full redButton h-[64px]" onClick={async () => {
                if (contextContainer.popButtonLabel?.actionNumber === 0) {
                    contextContainer.setLoading(0);
                    const deleteResponse = await universalDelete(`admin/deleteUser/${contextContainer.popButtonLabel?.actionData}`, session?.data?.accessToken)
                    if (deleteResponse?.ok) {
                        contextContainer.setLoading(2)
                        contextContainer.setPopUpNumber(-1);
                    }
                }
            }}>
                {contextContainer.loading === 0 ? <div className="flex justify-center"><img src="/spinner.svg" className="h-[40px] w-[40px]" /></div> : contextContainer.loading === 1 ? contextContainer.popMessage.buttonText : contextContainer.loading === 2 ? "Operation succesfull" : ""}
            </PrimaryButton>
        </div>
    )
}
export default PopMessage;