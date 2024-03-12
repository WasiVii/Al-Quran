/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

interface Data {
  [x: string]: any
  nomor: number
  nama: string
  nama_latin: string
  jumlah_ayat: number
  tempat_turun: string
  arti: string
  deskripsi: string
  audio: string
  ayat: {
    id: number
    surah: number
    nomor: number
    ar: string
    tr: string
    idn: string
  }
  surat_selanjutnya: {
    id: number
    nomor: number
    nama: string
    nama_latin: string
    jumlah_ayat: number
    tempat_turun: string
    arti: string
    deskripsi: string
    audio: string
  }
  surat_sebelumnya: {
    id: number
    nomor: number
    nama: string
    nama_latin: string
    jumlah_ayat: number
    tempat_turun: string
    arti: string
    deskripsi: string
    audio: string
  }
}

const SuratDetail = ({ params: { nomor } }: { params: { nomor: number } }) => {
  const [data, setData] = useState<Data | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://quran-api.santrikoding.com/api/surah/${nomor}`)
        const data = res.data as Data
        setData(data)
        setLoading(false)
      } catch (error) {
        return { message: 'Fetch Error: Failed to Load Data' }
      }
    }
    void fetchData()
  }, [nomor])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Surat data</p>

  return (
    <>
      <section className='pt-6'>
        <div className='mx-auto w-full'>
          <div className='mb-6 flex flex-col items-stretch justify-between gap-2 md:grid-cols-3 md:flex-row'>
            {data?.surat_selanjutnya.nomor !== 2 ? (
              <div>
                <Link href={`/surat/${data?.surat_sebelumnya.id}`}>
                  <button
                    type='button'
                    title='Main Page'
                    className='active:bg-primary w-full rounded-lg bg-green-400 px-6 py-3 text-center transition hover:bg-green-800 focus:bg-green-400 sm:w-max'
                  >
                    <div className='flex flex-col text-white'>
                      <div>Surat sebelumnya</div>
                      <div>
                        <span className='block font-semibold'>
                          ({data?.surat_sebelumnya.nomor}) {data?.surat_sebelumnya.nama_latin}
                        </span>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <Link href='/'>
                  <button
                    type='button'
                    title='Main Page'
                    className='active:bg-primary h-full w-full rounded-lg bg-green-400 px-6 py-3 text-center transition hover:bg-green-800 focus:bg-green-400 sm:w-max'
                  >
                    <div className='flex flex-col text-white'>
                      <div>Home</div>
                    </div>
                  </button>
                </Link>
              </div>
            )}
            <div>
              <Link href='/surat'>
                <button
                  type='button'
                  title='Main Page'
                  className='active:bg-primary h-full w-full rounded-lg bg-green-400 px-6 py-3 text-center transition hover:bg-green-800 focus:bg-green-400 sm:w-max'
                >
                  <div className='flex flex-col text-white'>
                    <div>Daftar Surat</div>
                  </div>
                </button>
              </Link>
            </div>
            {data?.surat_sebelumnya.nomor !== 113 ? (
              <div>
                <Link href={`/surat/${data?.surat_selanjutnya.id}`}>
                  <button
                    type='button'
                    title='Main Page'
                    className='active:bg-primary w-full rounded-lg bg-green-400 px-6 py-3 text-center transition hover:bg-green-800 focus:bg-green-400 sm:w-max'
                  >
                    <div className='flex flex-col text-white'>
                      <div>Surat selanjutnya</div>
                      <div>
                        <span className='block font-semibold'>
                          {data?.surat_selanjutnya.nama_latin} ({data?.surat_selanjutnya.nomor})
                        </span>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <Link href='/'>
                  <button
                    type='button'
                    title='Main Page'
                    className='active:bg-primary h-full w-full rounded-lg bg-green-400 px-6 py-3 text-center transition hover:bg-green-800 focus:bg-green-400 sm:w-max'
                  >
                    <div className='flex flex-col text-white'>
                      <div>Home</div>
                    </div>
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className='py-8'>
            <div className='grid grid-cols-1 '>
              <div className='w-full transform rounded-xl bg-white px-6 pb-2 pt-6 shadow-lg transition duration-500 hover:scale-105'>
                <h3 className='mb-3 text-xl font-bold text-indigo-600'>{data?.nama_latin}</h3>
                <div className='relative'>
                  <p className='rounded-br-lg rounded-tl-lg bg-green-300 px-3 py-1 font-semibold text-white'>
                    {data?.arti}
                  </p>
                </div>
                <h1
                  className='mt-4 cursor-pointer text-sm text-gray-800 md:text-lg'
                  dangerouslySetInnerHTML={{ __html: `${data?.deskripsi}` }}
                ></h1>
                <div className='my-4'>
                  {/* <div className='flex items-center space-x-1'>
                    <span></span>
                    <p>1:34:23 Minutes</p>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <span></span>
                    <p>3 Parts</p>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <span></span>
                    <p>Vanilla JS</p>
                  </div> */}
                  {/* <button
                    play={play}
                    stop={stop}
                    active={isPlaying}
                    className='mt-4 w-full rounded-xl bg-green-600 py-2 text-xl text-white shadow-lg hover:bg-green-800'
                  >
                    Play Audio
                  </button>
                  <audio id='a1'>
                    <source src={data?.audio} type='audio/mp3' />
                    Your browser does not support the audio element.
                  </audio> */}
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {Array.isArray(data.ayat) &&
              data.ayat.map((ayat: Data) => (
                <div key={ayat?.nomor}>
                  <div className='flex flex-col overflow-hidden rounded-lg border'>
                    <div className='h-2 bg-green-400'></div>

                    <div className='flex flex-1 flex-col p-2 pt-8 md:p-4 xl:px-6'>
                      <div className=''>
                        ({ayat?.surah}) {data?.nama_latin}: ({ayat?.nomor})
                        <div className='flex flex-col justify-between text-gray-800'>
                          <div className='mb-4 flex flex-col items-end justify-end text-end text-2xl'>
                            <div className='font-bold'>{ayat?.ar}</div>
                            <div className='text-sm'>
                              <p
                                className=''
                                dangerouslySetInnerHTML={{ __html: `${ayat?.tr}` }}
                              ></p>
                            </div>
                          </div>
                          <div className='flex flex-row justify-start'>
                            <div className='text-sm'>{ayat?.idn}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SuratDetail
