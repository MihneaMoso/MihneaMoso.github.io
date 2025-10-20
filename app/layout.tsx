import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mihnea Moso',
  description: "MihneaMoso's portofolio site",
  // generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
