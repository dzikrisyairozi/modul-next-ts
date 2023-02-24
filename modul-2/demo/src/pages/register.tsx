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
    const {register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            age: 0,
        }
    });

    console.log("errors", errors);

    register('firstName', {
        required: {
            value: true,
            message: "This is required!"
        } 
    });

    register('lastName', { 
        maxLength: {
            value: 5,
            message: "Max length is 5"
        },
        // // Validation Example
        // validate: (value) => {
        //     return value === 'Dzikri'
        // }
    });

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
                        <p className='text-red-500'>{errors.firstName?.message}</p>
                        <input {...register("lastName", {required: 'This is required', minLength: {
                            value:4,
                            message: 'Min length is 4!'
                        }})} placeholder='Last Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <input type='number' {...register("age", {valueAsNumber: true})} className='rounded w-[384px] h-[48px] pl-5' />
                        <p className='text-red-500'>{errors.lastName?.message}</p>
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
        </Layout>
    </>
    )
}

