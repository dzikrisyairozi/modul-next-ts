import Image from 'next/image';
import React from 'react'

type MovieDetailsProps = {
    backdrop_path: string,
    title: string,
    release_date: string,
    popularity: number,
    overview: string
}

const MovieDetails = ({   
    backdrop_path,
    title,
    release_date,
    popularity,
    overview, 
    ...props
}: MovieDetailsProps) => {

  return (
    <> 
        <div className='flex w-5/6 flex-col items-center justify-center'>
                <Image
                    src={backdrop_path}
                    alt={`${title} Backdrop`}
                    width={1440}
                    height={512}
                />
            <div className='flex w-full flex-col items-start'>
                <p className='text-white font-bold text-6xl'>{title}</p>
                <p className='text-white font-semibold text-2xl'>{release_date}</p>
                <p className='text-white font-semibold text-xl'>Popularity: {popularity}</p>
                <p className='text-white text-md'>{overview}</p>
            </div>
        </div>
    </>

  );
}

export default MovieDetails;

