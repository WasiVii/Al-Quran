'use client'

import { ToastContainer } from 'react-toastify'

export default function Template({ children }: React.PropsWithChildren) {
  return (
    <>
      <div>{children}</div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  )
}
