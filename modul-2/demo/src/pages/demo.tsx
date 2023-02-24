import Layout from '@/components/layout/Layout'
import Head from 'next/head'

import React from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    gender: string,
    isAdmin: boolean,

}

export default function Register() {
    const {register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            firstName: 'Dzikri',
            lastName: 'Syairozi',
            email: 'dzikrisyairozi@gmail.com',
            phoneNumber: 85169696969,
            gender: 'Male',
            isAdmin: true,
        }
    });

    // console.log("errors", errors);

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

                        <input type='text' {...register("firstName", {required: true, minLength: 4})} placeholder='First Name' className='rounded w-[384px] h-[48px] pl-5' /> 
                        <input type='text' {...register("lastName",)} placeholder='Last Name' className='rounded w-[384px] h-[48px] pl-5' />
                        <input type="email"{...register("email", {required: true, pattern: /^\S+@\S+$/i})}  placeholder="Email" className='rounded w-[384px] h-[48px] pl-5' />
                        <input type="tel" {...register("phoneNumber",{required: true, minLength:10, maxLength: 12})} placeholder="Phone Number" className='rounded w-[384px] h-[48px] pl-5' />
                        <label htmlFor="Gender" className='text-white'>Gender</label>
                        <select {...register("gender", { required: true })}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <label htmlFor="isAdmin" className='text-white'>Admin RPL 2023?</label>
                        <div className='flex gap-3'>
                            <label htmlFor="" className='text-white'>Yes</label>
                            <input {...register("isAdmin", { required: true })} type="radio" value="Yes" />
                            <label htmlFor="" className='text-white'>No</label>
                            <input {...register("isAdmin", { required: true })} type="radio" value="No" />
                        </div>
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
        </Layout>
    </>
    )
}

{/* <p className='text-red-500'>{errors.lastName?.message}</p> */}



{/* <form onSubmit={handleSubmit(onSubmit)}>
<input type="text" placeholder="First name" {...register("First name", {required: true, min: 4})} />
<input type="text" placeholder="Last name" {...register("Last name", {})} />
<input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
<input type="tel" placeholder="Phone Number" {...register("Phone Number", {, maxLength: 12})} />
<select {...register("Gender", { required: true })}>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>

<input {...register("Admin RPL 2023?", { required: true })} type="radio" value="Yes" />
<input {...register("Admin RPL 2023?", { required: true })} type="radio" value="No" />

<input type="submit" />
</form> */}