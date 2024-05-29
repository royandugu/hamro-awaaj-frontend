import HeaderAndFooterLayout from "../../../components/user/layouts/headerAndFooterLayout"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <HeaderAndFooterLayout >
            {children}
        </HeaderAndFooterLayout>
    )
}
