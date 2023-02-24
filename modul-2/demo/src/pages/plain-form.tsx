import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import React from 'react'

export default function GetStarted() {

    return (
        <>
        <Layout>
            <Head>
                <title>Demo</title>
                <meta name="description" content="Demo" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='bg-gray-800'>
                <section className='flex justify-center min-h-screen items-center'>
                    <form className='flex flex-col  gap-y-3'>
                        <p className='text-white font-semibold text-2xl'>React Hook Form</p>
                        <input name='firstName' placeholder='First Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <input name='lastName' placeholder='Last Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
        </Layout>
    </>
    )
}

