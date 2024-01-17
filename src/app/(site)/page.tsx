// "use client";
import Script from 'next/script'

import Home from './home'

export default function Page() {
  return (
    <>
      <Home />
      <Script
        type='text/javascript'
        defer
        src='https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js'
        data-preload
      ></Script>
    </>
  )
}
