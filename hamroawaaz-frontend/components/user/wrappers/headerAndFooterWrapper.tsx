import ClientHeader from "../header/header";
import ClientFooter from "../footer/footer";

const HeaderAndFooterWrapper = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <ClientHeader />
            {children}
            <ClientFooter />
        </>
    )
}
export default HeaderAndFooterWrapper;