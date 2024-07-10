import type { Metadata } from 'next'

import DashboardLayout from '../../../../components/admin/pages/layouts/dashboardLayout/dashboardLayout'
import SessionValidators from '../../../../components/system/components/wrappers/sessionValidators/sessionValidators';
import QueryClientWrapper from '../../../../components/system/components/wrappers/queryClient/queryClient';

export const metadata: Metadata = {
  title: 'Admin Panel - Hamro Aawaj',
  description: 'Admin panel for managing Hamro Aawaj. Oversee user activity, manage content, and configure AI detection settings.',
  keywords: 'Hamro Aawaj, admin panel, user management, content management, AI settings, Nepal Sign Language, NSL, assistive technology',
  authors: { name: "Hamro Aawaj team", url: "" },
  openGraph: {
    title: 'Admin Panel - Hamro Aawaj',
    description: 'Admin panel for managing Hamro Aawaj. Oversee user activity, manage content, and configure AI detection settings.',
    url: 'URL_to_admin_panel',
    images: [
      {
        url: 'URL_to_admin_panel_image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin Panel - Hamro Aawaj',
    description: 'Admin panel for managing Hamro Aawaj. Oversee user activity, manage content, and configure AI detection settings.',
    images: 'URL_to_admin_panel_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionValidators roleToValidate='[ADMIN]'>
      <QueryClientWrapper>
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </QueryClientWrapper>
    </SessionValidators>

  )
}
