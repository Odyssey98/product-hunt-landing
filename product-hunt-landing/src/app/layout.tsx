import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Device Cost Tracker - Track Your Device Costs Daily',
  description: 'Transform how you view your device expenses. Your iPhone costs less than your daily coffee!',
  keywords: ['device tracker', 'cost management', 'tech expenses', 'device lifecycle'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}