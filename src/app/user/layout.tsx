import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import DetailsFetcher from '../../../components/user/components/wrappers/detailsFetcher/detailsFetcher'
import ClientHeader from '../../../components/user/sections/global/header/header'
import ClientFooter from '../../../components/user/sections/global/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <DetailsFetcher>
            <ClientHeader isLoggedIn/>
                {children}
            <ClientFooter/>
        </DetailsFetcher>

    )
}
