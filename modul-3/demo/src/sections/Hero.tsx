import ButtonLink from '@/components/ButtonLink'
import Counter from '@/components/Counter'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section id='banner' className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat">
    <div className='layout flex flex-col gap-y-3 justify-center min-h-screen text-center bg-[#00000075]'>
      <h1 className='text-6xl font-bold text-white'>
        Demo
      </h1>
      <p className='text-xl font-normal text-gray-200'>
        React Data Query
      </p>
      <div className='flex flex-wrap w-full items-center justify-center gap-3'>
        <ButtonLink link='get-started' title='Get Started'/>
        <ButtonLink link='basic-axios' title='Basic Axios'/>
        <ButtonLink link='axios-tmdb' title='Axios TMDb API'/>
        <ButtonLink link='basic-react-query' title='Basic React Query'/>
        <ButtonLink link='pagination-react-query' title='Pagination React Query'/>
        <ButtonLink link='rq-tmdb' title='React Query TMDb API'/>
      </div>
      <div>
        <Link href='/movies'>
        <button className='bg-red-600 p-3 rounded-lg shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-red-700'>
          <p className='text-gray-200 font-bold'>Movies Page</p>
        </button>
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Hero