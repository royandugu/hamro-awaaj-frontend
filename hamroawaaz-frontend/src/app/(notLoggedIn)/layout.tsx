import ClientHeader from '../../../components/user/sections/header/header'
import ClientFooter from '../../../components/user/sections/footer/footer'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ClientHeader />
            {children}
            <ClientFooter/>
        </>

    )
}
