/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client'

import React, { useEffect, useState } from 'react'
// import Link from 'next/link'
import axios from 'axios'

interface Data {
  [id: number]: {
    id: number
    judul: string
    arab: string
    latin: string
    terjemah: string
  }
  [x: string]: any
}

const DoaList = () => {
  const [data, setData] = useState<Data | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://open-api.my.id/api/doa/`)
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
              <div key={data?.id as number}>
                {/* <Link href={`/surat/${data?.nomor}`}> */}
                <div className='flex flex-col overflow-hidden rounded-lg border'>
                  <div className='h-2 bg-green-400'></div>

                  <div className='flex flex-1 flex-col p-6 pt-8'>
                    <div className=''>
                      <div className='flex flex-col justify-between text-gray-800'>
                        <div className='mb-4 flex flex-col items-start justify-start'>
                          <div className='text-xl font-bold'>{data?.judul}</div>
                        </div>
                        <div className='mb-4 flex flex-col items-end justify-end text-end'>
                          <div className='text-2xl font-bold'>{data?.arab}</div>
                          <div className='text-md'>{data?.latin}</div>
                        </div>
                        <div className='mb-4 text-sm'>
                          <p className='text-gray-600'>{data?.terjemah}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default DoaList
