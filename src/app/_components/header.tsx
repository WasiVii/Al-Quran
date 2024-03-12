'use client'

import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex flex-col items-center justify-between lg:flex-row'>
      <div className='flex w-full justify-center'>
        <nav className='w-full'>
          <div className='relative z-30'>
            <div className='container m-auto md:px-0 lg:px-0 lg:py-0'>
              <div className='flex flex-wrap items-center justify-between gap-6 py-4 md:gap-0'>
                <input type='checkbox' name='toggle_nav' id='toggle_nav' className='peer hidden' />
                <div className='z-30 flex w-full justify-between px-0 md:w-max md:px-0'>
                  <Link href='/' className='text-lg'>
                    <p className='text-3xl font-bold sm:text-3xl '>
                      <span className='font-bold text-gray-800'>Al-</span>
                      <span className='text-green-400'>Qur&apos;an</span>
                    </p>
                  </Link>

                  <div className='flex max-h-8 items-center md:hidden'>
                    <label
                      role='button'
                      htmlFor='toggle_nav'
                      aria-label='hamburger'
                      id='hamburger'
                      className='relative p-2'
                    >
                      <div
                        id='line'
                        className='m-auto h-1 w-8 rounded bg-green-800 transition duration-300 dark:bg-gray-300'
                      ></div>
                      <div
                        id='line2'
                        className='m-auto mt-2 h-1 w-8 rounded bg-green-800 transition duration-300 dark:bg-gray-300'
                      ></div>
                      <div
                        id='line3'
                        className='m-auto mt-2 h-1 w-8 rounded bg-green-800 transition duration-300 dark:bg-gray-300'
                      ></div>
                    </label>
                  </div>
                </div>
                <label
                  htmlFor='toggle_nav'
                  className='fixed left-0 top-0 z-0 hidden h-full w-full bg-green-200 bg-opacity-30 backdrop-blur backdrop-filter peer-checked:block'
                ></label>
                <div
                  className='z-40 mx-auto hidden w-11/12 flex-col items-center justify-end
                            gap-y-8 rounded-xl bg-white p-6
                            peer-checked:flex md:mx-0 md:flex md:w-8/12 md:flex-row
                            md:gap-x-4 md:gap-y-0 md:divide-x md:bg-transparent
                            md:p-0 lg:w-7/12 dark:bg-gray-800'
                >
                  <div
                    className='flex w-full
                                min-w-max flex-col gap-4 pl-2 sm:w-max sm:flex-row'
                  >
                    <Link href='https://wasivii.me'>
                      <button
                        type='button'
                        title='Main Page'
                        className='active:bg-primary w-full rounded-lg bg-green-400 px-6 py-3 text-center transition hover:bg-green-800 focus:bg-green-400 sm:w-max'
                      >
                        <span className='block font-semibold text-white'>WasiVii.me</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
