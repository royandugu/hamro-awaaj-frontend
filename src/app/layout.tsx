import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ContextState from '../../components/system/context/contextStates'
import GlobalComponentsLayout from '../../components/system/pages/layouts/globalComponentsLayout/globalComponentsLayout'
import Provider from './sessionProvider'

import './tailwindImport.css'
import './globals.css'
import './fonts.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hamro Awaaj - Bridging Silence with Communication',
  description: 'Hamro Awaaj uses AI to detect Nepal Sign Language (NSL) hand signs, rendering text and voice output to help the deaf community in Nepal communicate more effectively.',
  keywords: 'Hamro Awaaj, Nepal Sign Language, NSL, deaf communication, AI hand sign detection, text and voice output, assistive technology',
  authors: { name: "Hamro Awaaj team", url: "" },
  openGraph: {
    title: 'Hamro Awaaj - Bridging Silence with Communication',
    description: 'Hamro Awaaj uses AI to detect Nepal Sign Language (NSL) hand signs, rendering text and voice output to help the deaf community in Nepal communicate more effectively.',
    url: 'URL_to_landing_page',
    images: [
      {
        url: 'URL_to_landing_page_image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamro Awaaj - Bridging Silence with Communication',
    description: 'Hamro Awaaj uses AI to detect Nepal Sign Language (NSL) hand signs, rendering text and voice output to help the deaf community in Nepal communicate more effectively.',
    images: 'URL_to_landing_page_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ContextState>
            <GlobalComponentsLayout>
              {children}
            </GlobalComponentsLayout>
          </ContextState>
        </Provider>
      </body>
    </html>
  )
}
