import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import React, {useEffect} from 'react'

import { useForm } from 'react-hook-form'

// type FormValues = {
//     firstName: string,
//     lastName: string,
//     age: number
// }

export default function Watch() {
    //isDirty, dirtyFields -> shouldDirty
    //touchedFields -> shouldTouch
    //error - isValid -> shouldValidate
    const {register, handleSubmit, setValue, formState: {isValid}  } = useForm({
        mode: 'onChange',
        defaultValues: {
            yourDetails : {
                firstName: "",
                lastName: ""
            }
        }
    });

    console.log("isValid", isValid)

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
                        <input {...register("yourDetails.firstName", {required: true})} placeholder='First Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <input {...register("yourDetails.lastName", {required: true})} placeholder='Last Name' className='rounded w-[384px] h-[48px] pl-5' />
                        {/* <input {...register("lastName", {required: true})} placeholder='Last Name' className='rounded w-[384px] h-[48px] pl-5' /> */}
                        {/* <input type='number' {...register("age")} placeholder='Age' className='rounded w-[384px] h-[48px] pl-5' /> */}
                        {/* <p className='text-red-500'>{errors.firstName?.message}</p> */}
                        <button type='button' onClick={()=>{
                            setValue('yourDetails', {
                                firstName: "Dzikri",
                                lastName: "Syairozi"
                            })
                        }} className='bg-red-500 w-1/3 rounded text-white'>setValue</button>
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
        </Layout>
    </>
    )
}

