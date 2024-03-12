'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <section className='bg-white pt-24'>
        <div className='mx-auto w-full px-0 md:px-4 lg:px-8 xl:px-12'>
          <div className='mx-auto w-full text-left md:w-11/12 md:text-center xl:w-9/12'>
            <h1 className='mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight'>
              <span>Mari membaca</span>{' '}
              <span className='leading-12 block w-full bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text py-2 text-transparent lg:inline'>
                Al-Qur&apos;an
              </span>{' '}
              <span>setiap hari</span>
            </h1>
            <p className='mb-8 px-0 text-lg text-gray-600 md:text-xl lg:px-24'>
              Sempatkan membaca ayat-ayat suci Al-Qur&apos;an di waktu luang anda.
            </p>
            <div className='mb-4 space-x-0 md:mb-8 md:space-x-2'>
              <Link
                href='/surat'
                className='mb-2 inline-flex w-full items-center justify-center rounded-xl bg-green-400 px-6 py-3 text-lg text-white sm:mb-0 sm:w-auto'
              >
                Mulai Membaca
                <svg
                  className='ml-1 h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </Link>
              <Link
                href='/doa'
                className='mb-2 inline-flex w-full items-center justify-center rounded-xl bg-gray-100 px-6 py-3 text-lg sm:mb-0 sm:w-auto'
              >
                Baca Doa
                <svg
                  className='ml-1 h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className='mx-auto mt-20 w-full text-center md:w-10/12'>
            <div className='relative z-0 mt-8 w-full'>
              <div className='relative overflow-hidden shadow-2xl'>
                {/* <div className='flex h-11 flex-none items-center rounded-xl rounded-b-none bg-green-400 px-4'>
                  <div className='flex space-x-1.5'>
                    <div className='h-3 w-3 rounded-full border-2 border-white'></div>
                    <div className='h-3 w-3 rounded-full border-2 border-white'></div>
                    <div className='h-3 w-3 rounded-full border-2 border-white'></div>
                  </div>
                </div> */}
                {/* <Image
                  alt='...'
                  src='https://cdn.devdojo.com/images/march2021/green-dashboard.jpg'
                  className='h-full object-cover align-middle'
                  fill={true}
                  quality={75}
                  loading='lazy'
                  priority={false}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
