import LoggedInNavigator from "../../../components/system/pages/layouts/loggedInNavigator/loggedInNavigator"
import HeaderAndFooterLayout from "../../../components/user/pages/layouts/headerAndFooterLayout"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <LoggedInNavigator>
            <HeaderAndFooterLayout >
                {children}
            </HeaderAndFooterLayout>
        </LoggedInNavigator>

    )
}
