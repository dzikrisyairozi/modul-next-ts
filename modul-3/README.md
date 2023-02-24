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
    - [Fetching data from an API endpoint using Axios/Fetch](#handling-form-data-in-react)
    - [Handling data in the component state](#handling-form-data-in-react)
    - [Error handling and loading states](#handling-form-data-in-react)
    - [Best practices for using Axios/Fetch for data fetching](#handling-form-data-in-react)
- [Advanced Data Fetching with React Query](#introduction-to-react-hook-form)
    - [Introduction to React Query](#what-is-react-hook-form)
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