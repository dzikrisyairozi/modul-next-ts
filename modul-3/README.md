# Pertemuan 3

# Table of contents

- [Get Started](#get-started)
    - [Module Overview](#module-overview)
    - [Introduction to data fetching](#introduction-to-data-fetching)
    - [What is an API?](#what-is-an-api?)  
    - [Get Started with TMDb API](get-started-with-tmdb-api)
- [Basic Data Fetching with Axios/Fetch](#basic-data-fetching-with-axios/fetch)
    - [Overview of Axios/Fetch libraries](#overview-of-axios/fetch-libraries)
    - [Setting up a project with Axios/Fetch](#setting-up-a-project-with-axios/fetch)
    - [Fetching data from TMDb API endpoint using Axios/Fetch](#fetching-data-from-tmdb-api-endpoint-using-axios/fetch)
    - [Handling data in the component state](#handling-data-in-the-component-state)
    - [Error handling and loading states](#error-handling-and-loading-states)
    - [Best practices for using Axios/Fetch for data fetching](#best-practices-for-using-axios/fetch-for-data-fetching)
- [Advanced Data Fetching with React Query](#advanced-data-fetching-with-react-query)
    - [Introduction to React Query](#introduction-to )
    - [Overview of React Query and its benefits](#setting-up-a-next.js-and-typescript-project)
    - [Installing and setting up React Query in a project](#what-is-react-hook-form)
    - [Querying data from an API endpoint using React Query](#what-is-react-hook-form)
    - [Handling data in React Query cache](#what-is-react-hook-form)
    - [Configuring query options for pagination and caching](#what-is-react-hook-form)
    - [Best practices for using React Query for data fetching](#what-is-react-hook-form)
- [Comparison and Integration](#conclusion-and-next-steps)
    - [Comparison between Axios/Fetch and React Query](#recap-of-what-we-have-learned)
    - [Advantages and disadvantages of each library](#tips-and-best-practices-for-building-forms-using-react-hook-form)
    - [Integrating React Query with an existing Axios/Fetch codebase](#)
    - [Migrating from Axios/Fetch to React Query](#)
    - [Best practices for choosing the right library for data fetching in a project](#)
- [Conclusion](#)
    - [Summary of the module](#)
    - [Further reading and resources](#)
- [Challenge](#challenge)

# **Get Started**

## **Module Overview**
### Fetch data in React using Axios/Fetch and how to advance it to use React Query module
![Fetch Illustration](/modul-3/images/b1.png) 

In this module, we will start by covering the basics of fetching data with Axios/Fetch. We will cover how to make GET requests to an API endpoint, how to handle data in the component state, and how to handle errors and loading states. We will also cover best practices for using Axios/Fetch in a React application.

![Fetch Illustration](/modul-3/images/a1.png) 

After that, we will move on to using React Query, a popular library for managing data fetching in React applications. We will cover the benefits of using React Query and how to install and set it up in a project. We will also cover how to use React Query to fetch data, handle data in the cache, and configure options for pagination and caching.

![Fetch Illustration](/modul-3/images/a3.jpg) 

Finally, we will compare and contrast the two approaches and discuss when to use each one. We will also cover how to integrate React Query with an existing Axios/Fetch codebase and how to migrate from Axios/Fetch to React Query. By the end of this module, you will have a solid understanding of how to fetch data in a React application and how to choose the right approach for your project.


### **Introduction to data fetching**

Data fetching refers to the process of retrieving data from a data source, such as a server, database, or API, and then using that data in an application. In web development, data fetching is an important aspect of creating dynamic and interactive user interfaces.

### **What is an API?**
API stands for Application Programming Interface. APIs define how different software components should interact with each other, allowing developers to easily integrate different services into their own applications. In simpler terms, an API allows one application to request data or services from another application, making it possible to build complex systems by combining different software components. Examples of APIs include the Google Maps API, the Twitter API, and the Facebook API. Following that, API that we will use for this module is [TMDb API](https://developers.themoviedb.org/3/getting-started/introduction)

![TMDB Illustration](/modul-3/images/a4.png) 

TMDb API is a RESTful web service for accessing information about movies, TV shows, and actors. It provides a way to retrieve details such as movie titles, release dates, plot summaries, ratings, reviews, cast, and crew information. The API is maintained by The Movie Database (TMDb), a community-driven movie and TV show database. Access to the API requires an API key, which can be obtained by creating an account on the TMDb website.

### **Get Started with TMDb API**
1. Go to [TMDb Website](https://www.themoviedb.org/)
2. Create an account, verify and login.
3. Go to the [API documentation page](https://developers.themoviedb.org/3/getting-started/introduction) and read through the documentation to get an understanding of how the API works.
4. Click on the [API](https://www.themoviedb.org/settings/api) tab in your account settings and generate an API key.
5. Thats it! Start using the API in your projects by making requests to the API endpoints using your API key.


## **Basic Data Fetching with Axios/Fetch**

### **Overview of Axios/Fetch libraries**
Axios and Fetch are JavaScript libraries that help us to make HTTP requests from a web application. We use them to retrieve data from a server or to send data to a server. They have similar functionalities, but Axios is more powerful and easier to use compared to Fetch.

### **Setting up a project with Axios/Fetch**
1. Create a new Next.js project with TypeScript support by running the following command in your terminal
```lua
npx create-next-app --typescript
```
-  or simply follow [here](https://github.com/dzikrisyairozi/modul-next-ts/tree/main/modul-1#inisiasi-proyek)
2. Install Axios by running the following command:
```lua
npm install axios
```
3. Create a new file `api.ts` in your `pages` directory. This file will contain the functions that handle your API requests. Here's an example:
```tsx
import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
```
- This function uses Axios to make a GET request to the JSONPlaceholder API and returns the response data.

4. In your `page` component, you can import the fetchData function from `api.ts` and use it to fetch data from the API. Here's an example:
```tsx
import { useEffect, useState } from 'react';
import { fetchData } from '../api';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>My Next.js App</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
```
- This component uses the `useState` hook to store the fetched data in state. The `useEffect` hook is used to call the `fetchData` function when the component mounts. The data is then rendered in an unordered list.

### **Fetching data from TMDb API endpoint using Axios/Fetch**

1. Create a new file `tmdbAPI.ts` in your api directory. This file will contain the functions that handle your TMDb API requests. Here's an example using Axios:
```tsx
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'YOUR_API_KEY';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
```
- This function uses Axios to make a GET request to the TMDb API's /movie/popular endpoint with your API key and returns the response data.

4. In your page component, you can import the `getPopularMovies` function from `tmdbAPI.ts` and use it to fetch data from the TMDb API. Here's an example:
```tsx
import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/tmdbAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
```
- This component uses the `useState` hook to store the fetched movies in state. The `useEffect` hook is used to call the `getPopularMovies` function when the component mounts. The movie titles are then rendered in an unordered list.

### **Handling data in the component state**
- In your page component, you can import the getPopularMovies function from tmdbAPI.ts and use it to fetch data from the TMDb API. Here's an example:
```tsx
import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/tmdbAPI';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>{movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
```
This component uses the `useState` hook to store the fetched movies in state. The `useEffect` hook is used to call the `getPopularMovies` function when the component mounts. The `isLoading` and `error` state variables are used to show a loading message and error message, respectively.

If the `isLoading` variable is true, the component returns a loading message. If the `error` variable has a value, the component returns an error message.

Otherwise, the component renders the fetched movie data in an unordered list. The movie data is accessed from the `movies` state variable. The `poster_path` property is used to construct an image URL.

### **Error handling and loading states**
1. Update your `tmdbAPI.ts` file in your `api` directory. 
```tsx
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'YOUR_API_KEY';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch popular movies');
  }
};
```
- If an error occurs, it throws a new `Error` object with a generic error message.

2. Update `getPopularMovies` function from `tmdbAPI.ts` like this: 
```tsx
import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/tmdbAPI';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>{movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
```
- If the isLoading variable is true, the component returns a loading message. If the error variable has a value, the component returns an error message with the error message text from the Error object thrown by the getPopularMovies function.

### **Best practices for using Axios/Fetch for data fetching**
- Check in [**here**](https://gist.github.com/dzikrisyairozi/90a4a28f73cae626a0438661286990b8)


## **Advanced Data Fetching with React Query**
![React Query Illustration](/modul-3/images/a2.png) 

### **Introduction to React Query**
React Query is a library for React applications that simplifies the process of fetching and updating data from servers. It provides a unified way to handle different types of data sources and comes with built-in caching and features to optimize performance.

With React Query, you can easily handle scenarios like pagination or infinite scrolling and even perform optimistic updates. It works well with other state management libraries like Redux and can be customized to fit your specific needs.

In short, React Query is a powerful tool that helps you manage data in your React applications, making it easier and faster to develop and maintain them.

### **Overview of React Query and its benefits**

React Query is a library that provides a powerful and flexible way to manage data in React applications. It simplifies the process of fetching and updating data by providing a unified API to handle various types of queries such as REST, GraphQL, or any other data source.

Some of the benefits of using React Query include:
1. **Built-in caching**: React Query comes with built-in caching, which means that it stores data in memory so that it can be retrieved quickly without having to make additional network requests.
2. **Automatic query retries**: If a network request fails, React Query automatically retries the request, which helps to ensure that your application always has the latest data.
3. **Stale-while-revalidate**: React Query allows you to show stale data while it is being updated in the background, which helps to reduce the perceived load time of your application.
4. **Optimistic update**s: With React Query, you can update data optimistically, which means that you can update the UI immediately while the actual update is being made in the background.
5. **Pagination and infinite scrolling**: React Query provides features to easily handle scenarios like pagination or infinite scrolling.
6. **Highly configurable**: React Query is highly configurable, allowing developers to customize it to fit their specific use cases.
7. Overall, React Query is a powerful tool that makes it easier to manage data in React applications, improving performance and making it faster to develop and maintain applications.

### **Installing and setting up React Query in a project**
To install React Query, you can use npm or yarn. Here are the steps to install it:
1. Open your terminal and navigate to your project directory.
2. Run the following command:
```lua
npm install react-query @types/react-query

or

yarn add react-query @types/react-query
```
- This will install React Query and its dependencies.
- Once React Query is installed, you need to wrap your React application with the `QueryClientProvider` component, which is provided by React Query. Here's an example of how to do that:

```tsx
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your application */}
    </QueryClientProvider>
  );
}
```
- In the code above, we create a new instance of `QueryClient` and pass it to the `QueryClientProvider` component, which we wrap around our application. This makes the `queryClient` available to all the components in our application.

### **Querying data from an API endpoint using React Query**

To query data from an API endpoint using React Query in a Next.js TypeScript environment, you can follow these steps:

1. Create a new file in your pages directory called `react-query.tsx `This will be the page where we display the fetched data.
2. Import the `useQuery` hook from react-query and the `NextPage` type from `next`. Also, create an interface for your data, which will be used to define the shape of the data returned by the API:
```tsx
import { useQuery } from 'react-query';
import type { NextPage } from 'next';

interface Post {
  id: number;
  title: string;
  body: string;
}
```
3. Define the query key, which is a unique identifier for the query. In this example, we're fetching data from the JSONPlaceholder API, so we'll use the URL as the query key:
```tsx
const QUERY_KEY = 'https://jsonplaceholder.typicode.com/posts';
```
4. Define the component that will render the data. Inside the component, use the `useQuery` hook to fetch the data:

```tsx
const Posts: NextPage = () => {
  const { isLoading, error, data } = useQuery<Post[]>(QUERY_KEY, async () => {
    const response = await fetch(QUERY_KEY);
    return response.json();
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
```

In the code above, we define a component called `Posts` that uses the `useQuery` hook to fetch data from the JSONPlaceholder API. The first argument to `useQuery` is the query key, which is the URL of the API endpoint. The second argument is an async function that fetches the data and returns it as JSON.

The `useQuery` hook returns an object that contains `isLoading`, `error`, and `data` properties. We use these properties to render the UI based on the current state of the query. If the data is loading, we display a "Loading..." message. If there's an error, we display an error message. Otherwise, we render the list of posts.

Finally, we export the `Posts` component as the default export from the `react-query.tsx` file.

### **Handling data in React Query cache**
React Query provides a powerful caching system that allows you to store and manage your data in a centralized cache. In a Next.js TypeScript environment, you can use the queryCache object provided by React Query to interact with the cache.

Here's an example of how you can interact with the cache in a Next.js TypeScript environment:
1. Import the `queryCache` object from `react-query`
```tsx
import { queryCache } from 'react-query';
```
2. In your component, you can use the `queryCache.getQueryData` method to get the cached data:
```tsx
const cachedData = queryCache.getQueryData<Post[]>(QUERY_KEY);
```
- In this example, `QUERY_KEY` is the query key that was used to fetch the data. The `getQueryData` method returns the cached data if it exists, or `undefined` if it doesn't.

3. You can also use the `queryCache.setQueryData` method to update the cached data:

```tsx
queryCache.setQueryData<Post[]>(QUERY_KEY, newData);
```
- In this example, `newData` is the updated data that you want to store in the cache.

4. You can use the `queryCache.invalidateQueries`method to invalidate a query and refetch the data:
```tsx
queryCache.invalidateQueries(QUERY_KEY);
```
In this example, `QUERY_KEY` is the query key that you want to invalidate.

5. You can use the `queryCache.prefetchQuery` method to prefetch data before it's needed:


```tsx
queryCache.prefetchQuery<Post[]>(QUERY_KEY, async () => {
  const response = await fetch(QUERY_KEY);
  return response.json();
});
```

In this example, `QUERY_KEY`is the query key that you want to prefetch. The second argument is an async function that fetches the data.

Prefetching data can improve the perceived performance of your application by fetching data in the background before it's needed.

By using these methods provided by `queryCache`, you can easily manage and interact with your cached data in a React Query-powered Next.js TypeScript application.

### **Configuring query options for pagination and caching**

React Query provides a flexible and powerful system for configuring query options, including options for pagination and caching. In a Next.js TypeScript environment, you can use these options to fine-tune the behavior of your queries and optimize the performance of your application.

Here are some examples of how you can configure query options for pagination and caching in a Next.js TypeScript environment:

1. Pagination
You can use the `useInfiniteQuery` hook to fetch paginated data. This hook is similar to `useQuery`, but it returns a function that you can use to fetch additional pages of data.

Here's an example of how you can use the `useInfiniteQuery` hook to fetch paginated data:

```tsx
import { useInfiniteQuery } from 'react-query';

interface Post {
  id: number;
  title: string;
  body: string;
}

const QUERY_KEY = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async (pageParam?: number) => {
  const response = await fetch(`${QUERY_KEY}?_page=${pageParam ?? 1}`);
  const data = await response.json();
  return data as Post[];
};

const Posts: NextPage = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    QUERY_KEY,
    ({ pageParam }) => fetchPosts(pageParam),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === 0 ? undefined : allPages.length + 1,
    }
  );

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error</div>;

  return (
    <>
      {data.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </React.Fragment>
      ))}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading more...' : 'Load more'}
      </button>
    </>
  );
};
```

- In this example, we define a component called `Posts` that uses the `useInfiniteQuery` hook to fetch paginated data from the JSONPlaceholder API. We pass a function called `fetchPosts` to the hook, which fetches data from the API using the `_page` query parameter to specify the page number. We also define a `getNextPageParam` function that returns the next page number to fetch.

- The useInfiniteQuery hook returns an object that contains `data`, `fetchNextPage`, `hasNextPage`, and `isFetchingNextPage` properties. We use these properties to render the UI and fetch additional pages of data when the user clicks the "Load more" button.

2. Time-based caching

You can use the cacheTime option to specify how long to cache query results. By default, React Query caches results for 5 minutes. You can set this value to a different number of milliseconds or to Infinity to cache the results indefinitely.

Here's an example of how you can set the cacheTime option to cache query results for 1 hour:

```tsx
import { useQuery } from 'react-query';

interface Post {
  id: number;
  title: string;
  body: string;
}

const QUERY_KEY = 'https://jsonplaceholder.typicode.com/posts';

const Posts: NextPage = () => {
  const { data, status } = useQuery<Post[]>(QUERY_KEY, {
    cacheTime: 60 * 60 * 1000, // cache for 1 hour
  });

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error</div>;

  return (
    <>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};
```

In this example, we define a component called `Posts` that uses the `useQuery` hook to fetch data from the JSONPlaceholder API and cache it for 1 hour. We pass an options object as the second argument to the `useQuery` hook that contains the `cacheTime` option set to 1 hour in milliseconds.

### **Best practices for using React Query for data fetching**

You can check it in [**here**](https://gist.github.com/dzikrisyairozi/4910215080f28d7ba28621fe36c19fba)

## **Compatison and Integration**

### **Comparison between Axios/Fetch and React Query**

| Feature | Axios/Fetch | React Query |
|-----------------|-----------------|-----------------|
| Caching  | ❌  | ✔️  |
| Automatic Query Refetching  | ❌  | ✔️  |
| Error Handling  | ✔️  | ✔️ |
| Integration with React  | ✔️  | ✔️  |
| Simplified API  | ❌  | ✔️  |

### **Advantages and disadvantages of each library**

You can check it in [**here**](https://gist.github.com/dzikrisyairozi/98519c095492ae9c48eeef79ca202e51)


### **Migrating/Integrating React Query with an existing Axios/Fetch codebase**

Integrating React Query with an existing Axios or Fetch codebase is straightforward and involves replacing the manual data fetching code with React Query's data fetching capabilities.
1. Replace the existing Axios code with useQuery hook:
```tsx
// Before ( Axios )
axios.get('/api/data')
  .then(response => {
    // handle response data
  })
  .catch(error => {
    // handle error
  });

  // Before ( fetch )
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    // handle response data
  })
  .catch(error => {
    // handle error
 });

// After
const { data, error, isLoading } = useQuery('data', () => axios.get('/api/data').then(res => res.data));

if (isLoading) {
  // handle loading state
}

if (error) {
  // handle error state
}

// handle response data using `data` variable
```

- In the above code, `useQuery` hook takes two arguments: a unique key for the data (`data` in this case) and a function that returns a promise with the data. React Query will automatically handle fetching the data and managing the state (loading, error, success) of the query.

- Similarly, you can replace your existing Fetch code with React Query's useQuery or useMutation hooks depending on your use case.

### **Fetching Data from TMDb API using React Query**

1. Create a new tmdb.ts file in your utils folder to define your TMDb API endpoints:
```tsx
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "your-api-key";

export const getPopularMovies = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json();
  return data;
};
```
- In the example above, we define a function `getPopularMovies` that fetches the popular movies from TMDb API using the `fetch` method and `response.json()` to parse the response data.

2. Next, create a new `PopularMovies.tsx` file in your pages folder to display the popular movies:
```tsx
import { useQuery } from "react-query";
import { getPopularMovies } from "../utils/tmdb";

const PopularMovies = () => {
  const { isLoading, isError, data, error } = useQuery(
    "popularMovies",
    () => getPopularMovies(1)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {data.results.map((movie: any) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
```

In the example above, we use the `useQuery` hook from React Query to fetch the popular movies from TMDb API using the `getPopularMovies` function we defined earlier. The `isLoading`, `isError`, `data`, and `error` variables are destructured from the hook result and used to render the UI.

### **Best practices for choosing the right library for data fetching in a project**
Kindly check in [here](https://gist.github.com/dzikrisyairozi/2718b22d723e71f762f014a1b6cfa061)

## **Conclusion**

### **Summary of the module**
- Basic Data Fetching using Axios/Fetch
- Advanced Data Fetching with React Query
- Comparison between the two

### **Further reading and resources**
Kindly check in [here](https://gist.github.com/dzikrisyairozi/729bc242792f2ee66812287dd97bd923)

## **Challenge**
- Fix/ Improve the second meeting assignment based on insights from demo with admin.
- Find and use the appropriate API service for the application you are implementing.
- You can use one or more services (there are no limits).
- Create a component to receive the data that will be used, and use the axios/fetch library or react-query as a means of data fetching. 
    - Handling data
    - Error handling and loading state
    - Pagination and caching ( if using React Query )
- Bonus points for implementing dynamic routing. [ OPTIONAL ]

List of API you can use: [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)
