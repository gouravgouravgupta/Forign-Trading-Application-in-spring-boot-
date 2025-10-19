import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gourav Gupta - Portfolio',
  description: 'Professional Portfolio of Gourav Gupta - Full Stack Developer',
  keywords: ['Portfolio', 'Web Development', 'Full Stack Developer', 'React', 'Next.js'],
  authors: [{ name: 'Gourav Gupta' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
