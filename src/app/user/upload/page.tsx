"use client"

import ClientHeader from "../../../../components/user/sections/header/header";
import UploadDisplay from "../../../../components/user/pages/upload/uploadDisplay";
import ClientFooter from "../../../../components/user/sections/footer/footer";

const Page = () => {
    return (
        <>
            <ClientHeader isLoggedIn />
            <UploadDisplay />
            <ClientFooter />
        </>
    )
}
export default Page;