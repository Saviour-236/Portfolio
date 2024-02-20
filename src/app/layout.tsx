import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './largeComponents/header'
import Footer from './largeComponents/footer'

import Link from 'next/link'
import { Suspense } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" >
      <body  className="font-serif  bg-[url('https://img.freepik.com/premium-photo/black-feathers-background_955834-1773.jpg')] max-md:bg-[url('https://w0.peakpx.com/wallpaper/639/3/HD-wallpaper-dark-lines-black-dark-super-background-lines-navy-blue-thumbnail.jpg')]  bg-cover bg-center bg-fixed  bg-no-repeat  ] h-full w-full overflow-scroll ">
      <Header />
        {children}
      </body>
      <Footer />
    </html>
  )
}
