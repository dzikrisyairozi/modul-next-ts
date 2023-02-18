# Pertemuan 2

# Table of contents

- [Learning Objectives](#learning-objectives)
- [Introduction to React Forms](#introduction-to-react-forms)
    - [What are React Forms?](#what-are-react-forms?)
    - [Why are forms important in web development?](#why-are-forms-important-in-web-development)
    - [Building a simple form in React (NextJS Environment)](#building-a-simple-form-in-react-(nextjs-environment))
- [Basic Form Handling in React](#basic-form-handling-in-react)
    - [Handling form data in React](#handling-form-data-in-react)
    - [Controlling form inputs in React](#controlling-form-inputs-in-react)
    - [Validation and error handling](#validation-and-error-handling)
- [Introduction to React Hook Form](#introduction-to-react-hook-form)
    - [Setting up a Next.js and TypeScript project](#setting-up-a-next.js-and-typescript-project)
    - [Building a form in a Next.js and TypeScript environment using React Hook Form](#building-a-form-in-a-next.js-and-typescript-environtment-using-react-hook-form)
- [Conclusion and Next Steps](#challenge-buat-kalian)
    - [Recap of what we have learned](#challenge-buat-kalian)
    - [Tips and best practices for building forms using React Hook Form](#challenge-buat-kalian)
    - [Further reading and resources for learning more about React and React Hook Form](#challenge-buat-kalian)
- [Challenge](#referensi)
    - [Build a complex form using React Hook Form in a Next.js and TypeScript environment](#referensi)
    - [Implement form validation and error handling](#referensi)
    - [Handle conditional rendering and form submission](#referensi)

<br>


# Learning Objectives
- Understand the basics of React form implementation
- Learn how to use React Hook Form to build forms in a Next.js and TypeScript environment
- Explore the different features of React Hook Form and how they can be used to build complex forms
- Gain practical experience building forms using React Hook Form

<br>

# Introduction to React Forms

## What are React Forms?
- React forms are a way of managing and handling user input within a React application. They allow users to submit data through a web form, which can then be processed by the application.
- In React, forms are created using the HTML form element, and they work just like regular HTML forms. However, React provides additional features that make it easier to handle form data and user input.
- React forms typically involve creating a component to manage the form, which contains input fields for users to enter data. When a user submits the form, the component can access the input data, validate it, and pass it to other parts of the application.

## Why are forms important in web development?
- Forms are an essential component of web development because they allow users to interact with a website and provide data to the application. Here are a few reasons why forms are important:
    - **User input**: Forms provide a way for users to enter data, such as their name, email address, and other information required by the website or application.
    - **Data collection**: Websites and applications often need to collect data from users, such as when signing up for an account, submitting a contact form, or making a purchase.
    - **Validation**: Forms allow developers to validate user input, ensuring that the data submitted is correct and meets certain criteria. This helps ensure that the data is accurate and consistent.
    - **Interactivity**: Forms make websites and applications more interactive and engaging for users, as they can enter data and see the results of their actions in real-time.
    - **Customization**: Forms can be customized to fit the specific needs of a website or application, allowing developers to create user-friendly interfaces that are easy to use and navigate.
- Overall, forms play a critical role in web development by enabling users to interact with a website or application and providing a way to collect, validate, and process user data.

## Building a simple form in React (NextJS Environment)
- First, create a new Next.js project using the following command in your terminal:
```lua
npx create-next-app --typescript my-form-project
```
- Once the project is created, navigate to the `pages` folder and go to a new file called `index.tsx`. This will be the page that contains the form.
- In the `index.tsx` file, add the following code to create a simple form:
```tsx
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Submitting form with name: ${name} and email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
```
In this code, we define two state variables name and email using the useState hook. We also define a handleSubmit function that logs the form data to the console when the form is submitted. The form includes two input fields for name and email, and a submit button.
- Start the development server using the following command in your terminal:
```lua
npm run dev

or 

yarn dev
```
This will start the development server and allow you to view your form at http://localhost:3000/.
- Test the form by entering some data into the input fields and clicking the submit button. You should see the form data logged to the console.

# Basic Form Handling in React

## Handling form data in React
In React, handling form data can be accomplished through various methods. Here are some common ways to handle form data in React:
- Controlled Components:
    - In a controlled component, form data is handled by React itself. It means that the value of each form element is stored in React's state, and when the form is submitted, React retrieves the values from the state. In other words, the state of the form is controlled by React. Here's an example:
```tsx
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```
- Uncontrolled Components:
    - In an uncontrolled component, the form data is handled by the DOM itself. In this approach, the state is not updated on every change but rather retrieved when the form is submitted. Here's an example:
```tsx
function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <button type="submit">Submit</button>
    </form>
  );
}

```
In this example, the `handleSubmit` function retrieves the form data using `event.target.elements`.

- Third-Party Libraries
    -  There are many third-party libraries available to handle form data in React, such as Formik and React Hook Form. These libraries provide additional features such as form validation and easy integration with APIs.

## Controlling form inputs in React

In React, controlling form inputs means that the value of each form input element is managed by React's state, and when the form is submitted, React retrieves the values from the state. In other words, the state of the form is controlled by React. <br>

Controlling form inputs in a Next.js and TypeScript environment is similar to controlling form inputs in a regular React environment. Here's an example of how to do it:

```tsx
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

```

in this example, we use the useState hook to create a state variable called `name` and a corresponding `handleNameChange` function to update the state when the input value changes. We also create a `handleSubmit` function that logs the name to the console when the form is submitted.

Note that we have also added types to the event parameters to make use of TypeScript's static type checking.

Once you have this basic setup, you can add more input fields and event handlers to control their values in a similar way.

## Validation and error handling
In a Next.js and TypeScript environment, you can add validation and error handling to your React forms to ensure that user input is correct and prevent invalid data from being submitted. Here's an example of how to add validation and error handling to a form with controlled inputs:
- First, define a state hook to store the form data and any errors:
```tsx
import { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
  });
```
In this example, we define two pieces of state: `formData`, which will hold the values of the form inputs, and `formErrors`, which will hold any error messages associated with each input.

- Next, we create an event handler to update the form data and validate the input:
```tsx
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "name") {
      if (!value) {
        setFormErrors((prevState) => ({
          ...prevState,
          name: "Name is required",
        }));
      } else {
        setFormErrors((prevState) => ({
          ...prevState,
          name: "",
        }));
      }
    }

    if (name === "email") {
      if (!value) {
        setFormErrors((prevState) => ({
          ...prevState,
          email: "Email is required",
        }));
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setFormErrors((prevState) => ({
          ...prevState,
          email: "Email is invalid",
        }));
      } else {
        setFormErrors((prevState) => ({
          ...prevState,
          email: "",
        }));
      }
    }
  };

```
In this example, the `handleInputChange` function updates the form data state with the new value of the input, and then checks if there are any validation errors associated with that input. If there is an error, the `formErrors` state is updated with the error message.

- Finally, we add the error messages to the form elements:
```tsx
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      {formErrors.name && <div>{formErrors.name}</div>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {formErrors.email && <div>{formErrors.email}</div>}

      <button type="submit">Submit</button>
    </form>
  );
```
In this example, we use the `&&` operator to conditionally render the error message if there is an error associated with the input. This way, the error message is only shown if there is an error to display.

This is just one example of how you can add validation and error handling to a form in a Next.js and TypeScript environment. Depending on the complexity of your form, you may need to add additional validation checks and error messages.

## Introduction to React Hook Form
[React Hook Form](https://react-hook-form.com/) is a lightweight library for building forms in React using hooks. It is designed to be easy to use, flexible, and performant, with a focus on minimizing the amount of code required to build and validate forms.

One of the main benefits of React Hook Form is that it is based on uncontrolled inputs. This means that the form inputs are not managed by the library, but by the DOM itself. As a result, the library is able to avoid some of the performance issues that can arise with other form libraries that rely on controlled inputs.

React Hook Form also provides a number of built-in features for building and validating forms, including:

- Support for different types of inputs, such as text, checkbox, radio, select, and more
- Easy-to-use hooks for registering inputs and handling form submission
- Support for complex validation rules using Yup schema validation
- Error handling and display of error messages
- Integration with third-party libraries such as Material UI and Formik

In addition, React Hook Form has a small API and is easy to learn, making it a great choice for both small and large-scale projects. By minimizing the amount of code required to build forms, React Hook Form can help to reduce development time and improve overall code quality.

Overall, React Hook Form is a powerful library for building forms in React, with a focus on simplicity, performance, and ease-of-use. If you are looking for a lightweight and flexible solution for building and validating forms in React, React Hook Form is definitely worth considering.

### Setting up a Next.js and TypeScript project
- You can check how to setting up the project in [here](https://github.com/dzikrisyairozi/modul-next-ts/tree/main/modul-1#inisiasi-proyek)