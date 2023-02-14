import ButtonLink from '@/components/ButtonLink'
import Counter from '@/components/Counter'
import React from 'react'

const Hero = () => {
  return (
    <section id='banner' className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat">
    <div className='layout flex flex-col justify-center min-h-screen text-center bg-[#00000075]'>
      <h1 className='text-6xl font-bold text-white'>
        Armand
      </h1>
      <p className='text-xl font-normal text-gray-200'>
        Tampan Muda dan Pemberani
      </p>
      <div>
        <ButtonLink title='Learn More'/>
        <Counter/>
      </div>
    </div>
  </section>
  )
}

export default Hero