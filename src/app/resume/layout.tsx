import type { Metadata } from 'next'
import '../globals.css'
import { LoadingScreen } from '@/components/shared/LoadingScreen'

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
        <>
            <LoadingScreen />
            <main className="relative font-quicksand">
                {children}
            </main>
        </>
    )
}
