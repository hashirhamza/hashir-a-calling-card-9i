import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Jersey_10, Patrick_Hand } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })
const jersey = Jersey_10({ subsets: ['latin'], weight: '400', variable: '--font-jersey' })
const patrick = Patrick_Hand({ subsets: ['latin'], weight: '400', variable: '--font-patrick' })

export const metadata: Metadata = {
  title: 'Hashir A — Software Developer',
  description:
    'Hashir A is a software developer working with React, TypeScript, and JavaScript, building responsive interfaces, reusable components, and REST API integrations.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf8f1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${jersey.variable} ${patrick.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
