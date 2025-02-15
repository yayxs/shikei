import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Providers } from './components/Providers'
import { MainNav } from './components/MainNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '10k | AI',
  description:
    ''
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className='min-h-screen bg-background text-foreground transition-colors duration-300'>
        <Providers>
          <Header />
          <main className='relative'>
           
            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-4 md:px-6 lg:px-8'>
              {children}
            </div>
          </main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}