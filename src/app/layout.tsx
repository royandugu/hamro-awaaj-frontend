import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ContextState from '../../components/system/context/contextStates'
import GlobalComponentsLayout from '../../components/system/globalComponentsLayout/globalComponentsLayout'

import './globals.css'

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
    <html lang="en">
      <body className={inter.className}>
        <ContextState>
          <GlobalComponentsLayout>
            {children}
          </GlobalComponentsLayout>
        </ContextState>
      </body>
    </html>
  )
}
