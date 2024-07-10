import { Metadata } from "next";

import HeaderAndFooterLayout from "../../../components/user/pages/layouts/headerAndFooterLayout"
import SessionCheckers from "../../../components/system/components/wrappers/sessionCheckers/sessionCheckers";

export const metadata: Metadata = {
    title: 'Hamro Aawaj - Bridging Silence with Communication',
    description: 'Hamro Aawaj uses AI to detect Nepal Sign Language (NSL) hand signs, rendering text and voice output to help the deaf community in Nepal communicate more effectively.',
    keywords: 'Hamro Aawaj, Nepal Sign Language, NSL, deaf communication, AI hand sign detection, text and voice output, assistive technology',
    authors: {name:"Hamro Aawaj team",url:""},
    openGraph: {
      title: 'Hamro Aawaj - Bridging Silence with Communication',
      description: 'Hamro Aawaj uses AI to detect Nepal Sign Language (NSL) hand signs, rendering text and voice output to help the deaf community in Nepal communicate more effectively.',
      url: 'URL_to_landing_page',
      images: [
        {
          url: 'URL_to_landing_page_image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hamro Aawaj - Bridging Silence with Communication',
      description: 'Hamro Aawaj uses AI to detect Nepal Sign Language (NSL) hand signs, rendering text and voice output to help the deaf community in Nepal communicate more effectively.',
      images: 'URL_to_landing_page_image',
    },
  };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SessionCheckers>
            <HeaderAndFooterLayout >
                {children}
            </HeaderAndFooterLayout>
        </SessionCheckers>

    )
}
