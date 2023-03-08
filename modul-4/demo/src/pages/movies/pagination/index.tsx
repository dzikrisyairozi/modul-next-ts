import { useQuery, useInfiniteQuery, QueryCache } from 'react-query';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import React from 'react'
import { getPopularMovies } from "@/pages/api/rq-tmdb";
import Poster from '@/components/shared/Poster';


interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

interface QueryError {
    message: string;
    // Add any other properties you expect to use here
  }

const QUERY_KEY = 'popular';

const fetchMovies = async (pageParam: number =  1) => {
    const { results } = await getPopularMovies(pageParam);
    return results as Movie[];
};


const Movies: NextPage = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery(
        QUERY_KEY,
        ({ pageParam = 1 }) => fetchMovies(pageParam),
        {
        getNextPageParam: (lastPage, allPages) =>
            lastPage.length === 0 ? undefined : allPages.length + 1,
        },
    );

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'error') return <div>Error</div>;

  
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
                <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white font-bold text-4xl pb-10'>Pagination React Query Data Fetching</h1>
                    <div className='flex flex-wrap justify-center gap-3'>
                        {data?.pages.map((page, index) => (
                            <React.Fragment key={index}>
                                {page.map((movie) => (
                                    <div key={movie.id}>
                                    <Poster
                                        link={`/movies/${movie.id}`}
                                        poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        title={movie.title}
                                        release_date={movie.release_date}
                                        overview={movie.overview}
                                    />
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                    <button
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                        className='text-white transition duration-200 animate-pulse bg-red-500 p-3 rounded-lg mt-5 hover:scale-105 hover:animate-none'
                    >
                        {isFetchingNextPage ? 'Loading more...' : 'Load more'}
                    </button>
                </div>
            </main>
        </Layout>
    </>
    );
  };
  
  export default Movies;
