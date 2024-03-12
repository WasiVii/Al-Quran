'use client'

// import Image from 'next/image'
import Link from 'next/link'

const data = [
  {
    id: '0',
    name: "Al-Qur'an",
    slug: 'surat',
    image:
      'https://img.icons8.com/external-kmg-design-flat-kmg-design/64/external-quran-ramadan-kmg-design-flat-kmg-design.png',
  },
  {
    id: '1',
    name: 'Hadists (Coming Soon)',
    slug: '#hadists',
    image:
      'https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/White/HTML5_white.png',
  },
  {
    id: '2',
    name: 'Doa',
    slug: 'doa',
    image:
      'https://img.icons8.com/external-filled-line-kendis-lasman/64/external-pray-islamic-flat-icon-filled-line-kendis-lasman.png',
  },
  {
    id: '3',
    name: 'Jadwal Shalat (Coming Soon)',
    slug: '#shalat',
    image:
      'https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/White/HTML5_white.png',
  },
  {
    id: '4',
    name: 'Jadwal Imsyakiyah (Coming Soon)',
    slug: '#imsyakiyah',
    image:
      'https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/White/HTML5_white.png',
  },
]

export default function Menu() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {data?.map((data) => (
          <div key={data?.id}>
            <Link href={data?.slug}>
              <div className='ml-auto mr-auto px-0 md:px-4'>
                <div className='relative mb-6 flex h-auto w-full min-w-0 flex-col break-words rounded-lg bg-gradient-to-r from-green-400 to-green-800 shadow-lg'>
                  <blockquote className='relative mb-4 p-8'>
                    <svg
                      preserveAspectRatio='none'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 583 95'
                      className='h-95-px -top-94-px absolute left-0 block w-full'
                    ></svg>
                    <div className='flex flex-row'>
                      <h4 className='text-md font-bold text-white'>{data?.name}&nbsp;</h4>
                      <button className='group'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 1024 1024'
                          className='icon'
                          version='1.1'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M512 64l100.266667 76.8 123.733333-17.066667 46.933333 117.333334 117.333334 46.933333-17.066667 123.733333L960 512l-76.8 100.266667 17.066667 123.733333-117.333334 46.933333-46.933333 117.333334-123.733333-17.066667L512 960l-100.266667-76.8-123.733333 17.066667-46.933333-117.333334-117.333334-46.933333 17.066667-123.733333L64 512l76.8-100.266667-17.066667-123.733333 117.333334-46.933333 46.933333-117.333334 123.733333 17.066667z'
                            fill='#ffffff'
                          />
                          <path
                            d='M738.133333 311.466667L448 601.6l-119.466667-119.466667-59.733333 59.733334 179.2 179.2 349.866667-349.866667z'
                            fill='#4ade80'
                          />
                        </svg>
                      </button>
                    </div>
                    <p className='text-md mt-2 font-light text-white'>{data?.name}</p>
                  </blockquote>
                  {/* <div>
                    <Image
                      alt='...'
                      src={data.image}
                      className='h-full align-middle'
                      fill={true}
                      quality={75}
                      loading='lazy'
                      priority={false}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
