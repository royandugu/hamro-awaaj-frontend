import AccountPage from "../../../../components/system/accountPage/accountPage";
import HeaderAndFooterLayout from "../../../../components/user/layouts/headerAndFooterLayout";

const Page = () => {
    return (
        <HeaderAndFooterLayout isLoggedIn>
            <div className="pt-15 pb-15">
                <AccountPage />
            </div>
        </HeaderAndFooterLayout>
    )
}

export default Page;