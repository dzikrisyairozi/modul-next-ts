import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section data-testid="hero-section" id='banner' className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat">
    <div className='layout flex flex-col gap-y-3 justify-center min-h-screen text-center bg-[#00000075]'>
      <h1 className='text-6xl font-bold text-white'>
        Demo
      </h1>
      <p className='text-xl font-normal text-gray-200'>
        React Unit Testing
      </p>
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