import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import React from 'react'

import { useForm } from 'react-hook-form'

export default function GetStarted() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        defaultValues:{
            firstName: "Dzikri",
            lastName: "Syairozi"
        }
    });

    const firstName = watch("firstName");

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
                    <form onSubmit={handleSubmit((data)=>{
                        console.log(data);
                    })} className='flex flex-col  gap-y-3'>
                        <p className='text-white font-semibold text-2xl'>React Hook Form</p>
                        <input {...register("firstName", {required: 'This is required.'})} placeholder='First Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <p className='text-white'>{firstName}</p>
                        <p className='text-red-500'>{errors.firstName?.message}</p>
                        <input {...register("lastName", {required: 'This is required', minLength: {
                            value:4,
                            message: 'Min length is 4!'
                        }})} placeholder='Last Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <p className='text-red-500'>{errors.lastName?.message}</p>
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
        </Layout>
    </>
    )
}

