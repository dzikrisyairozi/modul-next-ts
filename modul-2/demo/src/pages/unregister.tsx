import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import React from 'react'

import { useForm } from 'react-hook-form'

type FormValues = {
    firstName: string,
    lastName: string,
    age: number,
    checkbox: boolean;
}

export default function Register() {
    const {register, handleSubmit, watch, unregister, formState: {errors} } = useForm<FormValues>({
        defaultValues: {
            firstName: '',
            checkbox: true
        }
    });
    
    const onSubmit = (data:FormValues) => {
        console.log(data)
    }
   
    const checkbox = watch('checkbox');

    React.useEffect(() => {
        if(!checkbox){
            unregister('firstName')
        }
      }, [unregister, checkbox])

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
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  gap-y-3'>
                        <p className='text-white font-semibold text-2xl'>React Hook Form</p>
                        { checkbox && <input {...register("firstName", {required: 'This is required.'})} placeholder='First Name' className='rounded w-[384px] h-[48px] pl-5' />}
                        <p className='text-red-500'>{errors.firstName?.message}</p>
                        {/* {isValid ?<p className='text-green-500'>Valid</p>  : <p className='text-red-500'>Not Valid</p>} */}
                        <input type="checkbox" {...register('checkbox')}/>
                        {/* <button type='button' onClick={()=>{
                            resetField("firstName", { keepError: true })
                        }} className='bg-red-500 w-1/3 rounded text-white'>Reset Field</button>
                        <p className='text-red-500'>{errors.lastName?.message}</p> */}
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
        </Layout>
    </>
    )
}

