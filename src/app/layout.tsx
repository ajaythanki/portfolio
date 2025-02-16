import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LoadingScreen } from '@/components/shared/LoadingScreen'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ajay Thanki - Creative Developer',
  description: 'Full Stack Developer specializing in creating immersive digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <LoadingScreen />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
