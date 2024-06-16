import type { Metadata } from 'next'

import DetailsFetcher from '../../../components/user/components/wrappers/detailsFetcher/detailsFetcher'
import ClientHeader from '../../../components/user/sections/global/header/header'
import ClientFooter from '../../../components/user/sections/global/footer/footer'

export const metadata: Metadata = {
    title: 'User Dashboard - Hamro Awaaj',
    description: 'Welcome to your dashboard on Hamro Awaaj. Here you can upload images and videos for real-time Nepal Sign Language detection and communication assistance.',
    keywords: 'Hamro Awaaj, user dashboard, Nepal Sign Language, NSL, upload images, upload videos, real-time detection, AI hand sign detection, assistive technology',
    authors: {name:"Hamro Awaaj team",url:""},
    openGraph: {
      title: 'User Dashboard - Hamro Awaaj',
      description: 'Welcome to your dashboard on Hamro Awaaj. Here you can upload images and videos for real-time Nepal Sign Language detection and communication assistance.',
      url: 'URL_to_dashboard',
      images: [
        {
          url: 'URL_to_dashboard_image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'User Dashboard - Hamro Awaaj',
      description: 'Welcome to your dashboard on Hamro Awaaj. Here you can upload images and videos for real-time Nepal Sign Language detection and communication assistance.',
      images: 'URL_to_dashboard_image',
    },
  };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <DetailsFetcher>
            <ClientHeader isLoggedIn />
            <main>
                {children}
            </main>
            <ClientFooter />
        </DetailsFetcher>

    )
}
