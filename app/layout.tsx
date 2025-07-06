import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Baby',
  description: 'A Letter To My Better Half',
  generator: 'Chukwuma/Fiance',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/love (21).jpeg" />
        <title>XCELTRIP</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
