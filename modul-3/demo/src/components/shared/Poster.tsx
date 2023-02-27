import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Url } from 'url';

type PosterProps = ({
    id?: number,
    link: string,
    poster_path: string,
    title: string,
    release_date: string,
    overview: string
})

const Poster = ({   
    link,
    poster_path,
    title,
    release_date,
    overview, 
    ...props
}: PosterProps) => {
  return (
    <>
        <Link  href={link || '#'}>
            <div className='group/card relative overflow-hidden rounded-xl shadow-sm transition duration-500 hover:scale-105 hover:shadow-lg'>
                <div className='poster relative overflow-hidden'>
                    <Image
                        src={poster_path}
                        alt={`${title} Poster`}
                        width={256}
                        height={384}
                        className='transition duration-500 group-hover/card:translate-y-[-36px] group-hover/card:blur-sm'
                    />
                    <div className='absolute bottom-[-180px] h-1/2 w-full bg-gradient-to-t from-gray-900 via-gray-800 to-transparent transition duration-500 group-hover/card:translate-y-[-180px]'>
                        <div className='absolute bottom-[2px] m-3'>
                            <p className='text-gray-200 font-bold text-[16px]'>{title}</p>
                            <p className='text-gray-200 font-semibold text-[12px]'>{release_date}</p>
                            <p className='text-gray-200 text-[12px] line-clamp-3'>{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </>

  )
}

export default Poster