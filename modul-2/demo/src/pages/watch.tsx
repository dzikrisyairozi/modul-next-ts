import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import React, {useEffect} from 'react'

import { useForm } from 'react-hook-form'

type FormValues = {
    firstName: string,
    lastName: string,
    age: number
}

export default function Watch() {
    // const [value, setValue] = React.useState('')
    const {register, handleSubmit, watch } = useForm<FormValues>({
        defaultValues: {
            firstName: 'Dzikri',
            lastName: 'Syairozi',
            age: 0,
        }
    });

    //watch with defaultValue, type support
    const [firstName, lastName] = watch(['firstName', 'lastName'])

    //watch all, array, string
    console.log(watch(['firstName', 'lastName']))

    //watch with subscribe
    React.useEffect(()=> {
        const subscription = watch((data)=> {
            console.log(data);
        })
        return () => {
            subscription.unsubscribe();
        }
    }, [watch])

    // //useEffect confusion
    // const firstName = watch('firstName');

    // React.useEffect(()=> {

    // }, [firstName])

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
                        {/* <p className='text-white'>{ firstName === 'Dzikri' ? 'This is real' : 'wait'}</p> */}
                        {/* <input value={value} onChange={(e) => setValue(e.target.value)} className='rounded w-[384px] h-[48px] pl-5'/> */}
                        <input {...register("firstName")} placeholder='First Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <input {...register("lastName")} placeholder='Last Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <input type='number' {...register("age")} placeholder='Age' className='rounded w-[384px] h-[48px] pl-5' />
                        {/* <p className='text-red-500'>{errors.firstName?.message}</p> */}
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
        </Layout>
    </>
    )
}

