import HeaderAndFooterLayout from "../../../../components/user/layouts/headerAndFooterLayout";
import OutputDisplay from "../../../../components/user/pages/output/outputDisplay";

const Page = () => {
    return (
        <HeaderAndFooterLayout isLoggedIn>
            <OutputDisplay />
        </HeaderAndFooterLayout>
    )
}
export default Page;