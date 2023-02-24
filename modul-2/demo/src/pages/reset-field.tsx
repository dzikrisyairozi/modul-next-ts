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
    const {register, handleSubmit, resetField, formState: {errors, isValid} } = useForm<FormValues>({
        defaultValues: {
            firstName: 'Dzikri',
            lastName: '',
            age: 0,
        }
    });
    
    const onSubmit = (data:FormValues) => {
        console.log(data)
    }
   

    // reset({
    //     ...getValues,
    //     firstName: 'Dzikri'
    // });


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
                        <input {...register("firstName", {
                                    required: 'This is required.', 
                                    minLength:{
                                        value: 5,
                                        message: "This need to be min length of 5"
                                    }
                                })} placeholder='First Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <p className='text-red-500'>{errors.firstName?.message}</p>
                        {isValid ?<p className='text-green-500'>Valid</p>  : <p className='text-red-500'>Not Valid</p>}
                        <button type='button' onClick={()=>{
                            resetField("firstName", { keepError: true })
                        }} className='bg-red-500 w-1/3 rounded text-white'>Reset Field</button>
                        {/* <p className='text-red-500'>{errors.lastName?.message}</p> */}
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
        </Layout>
    </>
    )
}

