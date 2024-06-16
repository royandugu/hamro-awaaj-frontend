import { Metadata } from "next";

import LoggedInNavigator from "../../../components/system/pages/layouts/loggedInNavigator/loggedInNavigator"
import HeaderAndFooterLayout from "../../../components/user/pages/layouts/headerAndFooterLayout"

export const metadata: Metadata = {
    title: 'Hamro Awaaj - Bridging Silence with Communication',
    description: 'Hamro Awaaj uses AI to detect Nepal Sign Language (NSL) hand signs, rendering text and voice output to help the deaf community in Nepal communicate more effectively.',
    keywords: 'Hamro Awaaj, Nepal Sign Language, NSL, deaf communication, AI hand sign detection, text and voice output, assistive technology',
    authors: {name:"Hamro Awaaj team",url:""},
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
        <LoggedInNavigator>
            <HeaderAndFooterLayout >
                {children}
            </HeaderAndFooterLayout>
        </LoggedInNavigator>

    )
}
