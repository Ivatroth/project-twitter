import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import {Providers} from "./providers";


export const metadata: Metadata = {
  title: 'Clon de Twitter',
  description: 'Generado por IFrontroth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body><Providers>{children}</Providers></body>
    </html>
  )
}
