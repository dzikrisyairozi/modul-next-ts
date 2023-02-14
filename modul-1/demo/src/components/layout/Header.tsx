import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
    <nav className='py-5 bg-gray-900'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href="" className='flex items-center'>
          <Image src='/Logo.png' alt="Logo" width={36} height={36} className='mr-3' />
          <span className='self-center text-xl font-semibold text-white'>Armand</span>
        </a>
        <div>
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a href="" className='text-white  font-semibold py-2'>
                About
              </a>
            </li>
            <li>
              <a href="" className='text-white  font-semibold py-2'>
                Service
              </a>
            </li>
            <li>
              <a href="" className='text-white  font-semibold py-2'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header