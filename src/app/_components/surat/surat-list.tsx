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
}

const SuratList = () => {
  const [data, setData] = useState<Data | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://quran-api.santrikoding.com/api/surah')
        const data = res.data as Data
        setData(data)
        setLoading(false)
      } catch (error) {
        return { message: 'Fetch Error: Failed to Load Data' }
      }
    }
    void fetchData()
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Al-Qur&apos;an data</p>

  return (
    <>
      <section className='pt-6'>
        <div className='mx-auto w-full'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {data?.map((data: Data) => (
              <div key={data?.nomor}>
                <Link href={`/surat/${data?.nomor}`}>
                  <div className='flex flex-col overflow-hidden rounded-lg border'>
                    <div className='h-2 bg-green-400'></div>

                    <div className='flex flex-1 flex-col p-6 pt-8'>
                      <div className=''>
                        <div className='flex flex-row items-center justify-between text-2xl font-bold text-gray-800'>
                          <div className='flex flex-col justify-start'>
                            <div className='text-xl'>
                              {data?.nama_latin} ({data?.jumlah_ayat})
                            </div>

                            <div className='text-sm'>
                              <p className='text-green-400'>{data?.arti}</p>
                            </div>
                          </div>
                          <div className='text-2xl'>{data?.nama}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SuratList
