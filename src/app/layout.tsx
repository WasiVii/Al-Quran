import Script from 'next/script'
import { type Metadata } from 'next/types'

import { siteMeta } from '@/config'
import { TRPCReactProvider } from '@/trpc/react'
import { fontInter, fontMono } from '@/utils/fontloader'
import { cn } from '@/utils/helpers'

import Footer from './_components/footer'
import Header from './_components/header'

import '@/assets/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Home' + ' - ' + siteMeta.title,
    template: `%s - ${siteMeta.title}`,
  },
  applicationName: siteMeta.title,
  description: siteMeta.description,
  keywords: ['nextjs', 'react', 'starter', 'boilerplate'],
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
    { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', url: '/favicon.png' },
    { rel: 'apple-touch-icon', url: '/favicon.png' },
  ],
  metadataBase: new URL(siteMeta.baseUrl),
  openGraph: {
    type: 'website',
    url: new URL(siteMeta.baseUrl),
    title: siteMeta.title,
    description: siteMeta.description,
    siteName: siteMeta.title,
    images: [{ url: `${siteMeta.baseUrl}/images/og-image.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: `${siteMeta.baseUrl}/images/og-image.png`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isDevelopment = process.env.NODE_ENV === 'development'
  return (
    <html lang='en' className={cn(fontInter.className, fontMono.variable)}>
      <body className={cn(isDevelopment && 'debug-screens')} suppressHydrationWarning={true}>
        <TRPCReactProvider>
          <div className='bg-white lg:pb-12'>
            <div className='mx-auto max-w-screen-xl px-5'>
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </TRPCReactProvider>
      </body>
      <Script
        type='text/javascript'
        defer
        src='https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js'
        data-preload
      ></Script>
    </html>
  )
}
