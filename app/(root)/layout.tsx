import Footer from '@/components/Footer'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Capital Partners Investment LTD",
  description: "Capital Partners Investment LTD",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
