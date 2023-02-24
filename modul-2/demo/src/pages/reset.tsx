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
    const {register, handleSubmit, control, reset, formState, getValues, formState: {isDirty, isSubmitSuccessful} } = useForm<FormValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            age: 0,
        }
    });

    console.log("isDirty", isDirty)

    React.useEffect(() => {
        if(formState.isSubmitSuccessful){
            reset({
                firstName: 'Dzikri',
                lastName: 'Syairozi'
            })
        }
    }, [formState, reset]);


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
                        reset();
                    })} className='flex flex-col  gap-y-3'>
                        <p className='text-white font-semibold text-2xl'>React Hook Form</p>
                        <input {...register("firstName")} placeholder='First Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <input {...register("lastName")} placeholder='Last Name' className='rounded w-[384px] h-[48px] pl-5' />
                        {/* <input control={control} name={"lastName"} className='rounded w-[384px] h-[48px] pl-5' /> */}
                        <button type='button' 
                            onClick={()=>{
                                reset(
                                    {
                                        ...getValues(),
                                        firstName:'Dzikri',
                                        lastName: 'Syairozi'
                                    },
                                    // {keepValues: true}
                                    // {keepDefaultValues: true}
                                );
                            }} className='bg-red-500 w-1/3 rounded text-white'>Reset</button>
                       
                        {/* <input {...register("lastName", {required: 'This is required', minLength: {
                            value:4,
                            message: 'Min length is 4!'
                        }})} placeholder='Last Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <input type='number' {...register("age", {valueAsNumber: true})} className='rounded w-[384px] h-[48px] pl-5' />
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/> */}
                    </form>
                </section>
            </main>
        </Layout>
    </>
    )
}

