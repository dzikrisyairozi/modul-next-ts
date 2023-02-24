import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import React from 'react'

import { useForm } from 'react-hook-form'

type FormValues = {
    firstName: string,
    lastName: string,
    age: number,
}

export default function Register() {
    const {register, handleSubmit, trigger, formState: {errors} } = useForm<FormValues>();

    console.log("errors", errors)

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
                        <input {...register("lastName", {required: 'This is required.'})} placeholder='Last Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <button type='button' onClick={ async ()=>{
                            const output = await trigger("firstName", { shouldFocus: true })

                            // const output = await trigger()
                            console.log('output', output)

                            // trigger(["firstName", "lastName"])
                        }} className='bg-red-500 w-1/3 rounded text-white'>Trigger</button>
                        
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
        </Layout>
    </>
    )
}

