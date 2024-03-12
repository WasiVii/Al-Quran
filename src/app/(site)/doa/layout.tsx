import type { Metadata } from 'next'

import { siteMeta } from '@/config'

export const metadata: Metadata = {
  title: {
    default: `Doa`,
    template: `%s - ${siteMeta.title}`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='mt-78'>{children}</div>
    </>
  )
}
