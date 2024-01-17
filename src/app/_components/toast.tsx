'use client'

import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
export default function Toast() {
  const notify = () =>
    toast.success('🦄 Wow so easy!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  return (
    <>
      <div className='flex flex-col items-center gap-2'>
        <button
          onClick={notify}
          className='active:bg-primary w-full rounded-xl bg-blue-300 px-6 py-3 text-center transition hover:bg-blue-600 focus:bg-blue-300 sm:w-max'
        >
          Toast
        </button>
      </div>
    </>
  )
}
