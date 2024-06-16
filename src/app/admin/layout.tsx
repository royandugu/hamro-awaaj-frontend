import type { Metadata } from 'next'

import DashboardLayout from '../../../components/admin/pages/layouts/dashboardLayout/dashboardLayout'

export const metadata: Metadata = {
    title: 'Admin Panel - Hamro Awaaj',
    description: 'Admin panel for managing Hamro Awaaj. Oversee user activity, manage content, and configure AI detection settings.',
    keywords: 'Hamro Awaaj, admin panel, user management, content management, AI settings, Nepal Sign Language, NSL, assistive technology',
    authors: {name:"Hamro Awaaj team",url:""},
    openGraph: {
      title: 'Admin Panel - Hamro Awaaj',
      description: 'Admin panel for managing Hamro Awaaj. Oversee user activity, manage content, and configure AI detection settings.',
      url: 'URL_to_admin_panel',
      images: [
        {
          url: 'URL_to_admin_panel_image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Admin Panel - Hamro Awaaj',
      description: 'Admin panel for managing Hamro Awaaj. Oversee user activity, manage content, and configure AI detection settings.',
      images: 'URL_to_admin_panel_image',
    },
  };
  
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>

    )
}
