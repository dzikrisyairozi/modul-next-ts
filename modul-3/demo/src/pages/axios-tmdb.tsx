import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '@/pages/api/tmdbAPI';

import Head from 'next/head'

import Layout from '@/components/layout/Layout'
import Image from 'next/image';



type DataType = {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
};


const MoviesPage = () => {
  const [movies, setMovies] = useState<DataType[]>([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const data = await getPopularMovies();
//       setMovies(data.results);
//     };
//     fetchMovies();
//   }, []);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error:any) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return (
        <div className='min-h-screen bg-gray-800 flex justify-center items-center'>
            <p className='text-white text-4xl font-semibold'>Loading...</p>
        </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <Layout>
        <Head>
            <title>Demo</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='bg-gray-800'>
            <div className='flex flex-col items-center py-10 max-w-6xl mx-auto'>
                <h1 className='text-white font-bold text-4xl pb-5'>Fetching TMDb API using Axios</h1>
                <ul className='flex flex-wrap justify-center'>
                        {movies.slice(0, 30).map((movie) => (
                        <li key={movie.id}>
                            <div className='flex flex-col items-center p-2 bg-gray-200 rounded-sm m-1 w-[256px] h-[384px] scale-95 transition duration-500 hover:scale-105'>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    width={200}
                                    height={300}
                                />
                                <div className='flex flex-col items-start justify-start w-full pl-5'>
                                    <p className='text-red-500 font-semibold'>{movie.title}</p>
                                    <p className='text-red-500 font-regular'>{movie.release_date}</p>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
            </div>
        </main>
    </Layout>
</>
  );
};

export default MoviesPage;

