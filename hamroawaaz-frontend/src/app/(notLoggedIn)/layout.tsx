import ClientHeader from '../../../components/user/sections/header/header'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ClientHeader />
            {children}
        </>

    )
}
