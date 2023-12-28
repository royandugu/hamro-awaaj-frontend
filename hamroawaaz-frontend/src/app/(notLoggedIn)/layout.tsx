import ClientHeader from '../../../components/user/header/header'
import ClientFooter from '../../../components/user/footer/footer'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ClientHeader />
                {children}
                <ClientFooter />
            </body>
        </html>
    )
}
