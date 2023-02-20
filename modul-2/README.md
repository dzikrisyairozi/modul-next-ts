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
    - [What is React Hook Form?](#what-is-react-hook-form)
    - [Setting up a Next.js and TypeScript project](#setting-up-a-next.js-and-typescript-project)
    - [Building a form in a Next.js and TypeScript environment using React Hook Form](#building-a-form-in-a-next.js-and-typescript-environtment-using-react-hook-form)
- [Conclusion and Next Steps](#conclusion-and-next-steps)
    - [Recap of what we have learned](#recap-of-what-we-have-learned)
    - [Tips and best practices for building forms using React Hook Form](#tips-and-best-practices-for-building-forms-using-react-hook-form)
    - [Further reading and resources for learning more about React and React Hook Form](#)
- [Challenge](#challenge)


<br>


# Learning Objectives
- Understand the basics of React form implementation
- Learn how to use React Hook Form to build forms in a Next.js and TypeScript environment
- Explore the different features of React Hook Form and how they can be used to build complex forms
- Gain practical experience building forms using React Hook Form

<br>

# Introduction to React Forms
![form](/modul-2/images/a1.png)
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

### What is React Hook Form?
[React Hook Form](https://react-hook-form.com/) is a lightweight library for building forms in React using hooks. It is designed to be easy to use, flexible, and performant, with a focus on minimizing the amount of code required to build and validate forms.

One of the main benefits of React Hook Form is that it is based on uncontrolled inputs. This means that the form inputs are not managed by the library, but by the DOM itself. As a result, the library is able to avoid some of the performance issues that can arise with other form libraries that rely on controlled inputs.

React Hook Form also provides a number of built-in features for building and validating forms, including:

- Support for different types of inputs, such as text, checkbox, radio, select, and more
- Easy-to-use hooks for registering inputs and handling form submission
- Support for complex validation rules using Yup schema validation
- Error handling and display of error messages
- Integration with third-party libraries such as Material UI and Formik

In addition, React Hook Form has a small [API](https://react-hook-form.com/api/) and is easy to learn, making it a great choice for both small and large-scale projects. By minimizing the amount of code required to build forms, React Hook Form can help to reduce development time and improve overall code quality.

- React Hook Form API 
<br> Here's a brief overview of the React Hook Form API:

![api](/modul-2/images/api.jpeg)

  ### **useForm**
  <br> The `useForm` hook is used to create a form instance with all of the necessary methods and state to control the form.

  ```tsx
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  ```
  - The useForm hook takes an optional configuration object with the following options:
      -  `defaultValues`: An object of default values for the form fields.
      -  `mode`: A string specifying the mode for the form validation. Can be set to '`onChange`',   '`onBlur`', or - '`onSubmit`'.
      - `resolver`: A resolver function for validating the form data. Must return a Promise with an object of errors, or an empty object if there are no errors.

  1. **register** <br>
  The `register` function is used to register an input field with the form instance. It returns an object with the ref and name properties that are used to bind the input field to the form.

  ```tsx
  <input type="text" {...register("firstName", { required: true })} />
  ```

  - The first argument of register is the name of the input field, and the second argument is an object of validation rules.

  2. **watch** <br>
  A function that returns the current value of one or more fields, and subscribes to changes in those fields. You can use this function to monitor changes to the values of input fields, and to trigger side effects based on those changes. You can pass the name of a single field, an array of field names, or nothing to watch all fields.

  ```tsx
  const { register, handleSubmit, watch } = useForm();

  // Register the firstName and lastName fields
  const firstNameRef = register("firstName");
  const lastNameRef = register("lastName");

  // Watch for changes to the firstName and lastName fields
  const firstNameValue = watch("firstName");
  const lastNameValue = watch("lastName");

  ``` 
  In the example above, we use `watch` to get the current values of the `firstName` and `lastName` fields, and store them in `firstNameValue` and `lastNameValue`, respectively. We can then use these values to trigger side effects, such as updating the UI or making API calls.

  3. **formState** <br>
  An object that contains the current state of the form. This object includes properties such as `dirty`, `isSubmitted`, and `isValid`. You can use this object to display error messages, disable form controls, and more.

  ```tsx
  import { useForm } from "react-hook-form";

  type FormInputs = {
    test: string
  }

  export default function App() {
    const {
      register,
      handleSubmit,
      // Read the formState before render to subscribe the form state through Proxy
      formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
    } = useForm<FormInputs>();
    const onSubmit = (data: FormInputs) => console.log(data);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("test")} />
        <input type="submit" />
      </form>
    );
  }

  ``` 

  4. **handleSubmit** <br>
  The `handleSubmit` function is used to handle the form submission. It takes a callback function that is called with the form data when the form is submitted.
  ```tsx
  const onSubmit = (data: FormValues) => console.log(data);

  <form onSubmit={handleSubmit(onSubmit)}>

  ```

  5. **errors** <br>
  The errors object contains any validation errors for the input fields. It is accessed through the formState object.
    ```tsx
    const {
    formState: { errors },
  } = useForm<FormValues>();

  {errors.firstName && <span>This field is required</span>}
  ```

  6. **reset** <br>
  The `reset` function is used to reset the form to its initial values. It can be called with an optional object of default values.

  ```tsx
    const {
    formState: { isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };
  ```

  7. **setError** <br>
  The `setError` function is used to manually set an error for an input field. It takes the name of the field and an object with the `type` and `message` properties.
  ```tsx
  const {
    setError,
    clearErrors,
  } = useForm<FormValues>();

  setError("firstName", { type: "required", message: "This field is required" });
  ```

  8. **clearErrors** <br>
  The `clearErrors` function is used to clear the errors for an input field. It takes the name of the field.
  ```tsx
    const {
    clearErrors,
  } = useForm<FormValues>();

  clearErrors("firstName");
  ```

  9. **setValue**  <br>
   Used to set the value of an input field.
  ```tsx
    const {
    register,
    setValue,
    handleSubmit,
  } = useForm<FormValues>();

  // Set the value of the firstName field
  setValue("firstName", "John");

  // Register the firstName field
  <input type="text" {...register("firstName")} />

  // Handle the form submission
  const onSubmit = (data: FormValues) => console.log(data);
  <form onSubmit={handleSubmit(onSubmit)}>
  ```
  
  10. **trigger** <br>
  A function that manually triggers validation for one or more fields. You can use this function to force validation for fields that are not currently dirty or have not yet been touched by the user.

  ```tsx
  const { register, handleSubmit, trigger } = useForm();

  // Register the email and password fields
  const emailRef = register("email", { required: true, pattern: /^\S+@\S+$/i });
  const passwordRef = register("password", { required: true, minLength: 8 });

  // Validate the form when the user clicks a custom "Validate" button
  const handleValidate = async () => {
    const isValid = await trigger();
    console.log("Form is valid:", isValid);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" name="email" ref={emailRef} />
      <input type="password" name="password" ref={passwordRef} />
      <button type="button" onClick={handleValidate}>
        Validate
      </button>
      <button type="submit">Submit</button>
    </form>
  );

 ``` 
 
 In the example above, we use `trigger` to manually validate the entire form when the user clicks a custom "Validate" button. We await the result of `trigger`, which is a boolean indicating whether the form is currently valid. We then log this value to the console.

### Setting up a Next.js and TypeScript project

- You can check how to setting up the project in [here](https://github.com/dzikrisyairozi/modul-next-ts/tree/main/modul-1#inisiasi-proyek)

### Building a form in a Next.js and TypeScript environment using React Hook Form

- Basic Form

```tsx
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
    const {register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    return (
        <>
            <main className='bg-gray-800'>
                <section className='flex justify-center min-h-screen items-center'>
                    <form onSubmit={handleSubmit((data)=>{
                        console.log(data);
                    })} className='flex flex-col  gap-y-3'>
                        <p className='text-white font-semibold text-2xl'>React Hook Form</p>

                        <input type='text' {...register("firstName")} placeholder='First Name'  /> 
                        <input type='text' {...register("lastName",)} placeholder='Last Name'  />
                        <input type="email"{...register("email",)}  placeholder="Email"  />
                        <input type="tel" {...register("phoneNumber",)} placeholder="Phone Number"  />
                        <label htmlFor="Gender">Gender</label>
                        <select {...register("gender")}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <label htmlFor="isAdmin">Admin RPL 2023?</label>
                        <div className='flex gap-3'>
                            <label htmlFor="">Yes</label>
                            <input {...register("isAdmin")} type="radio" value="Yes" />
                            <label htmlFor="">No</label>
                            <input {...register("isAdmin")} type="radio" value="No" />
                        </div>
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
    )
}
```

- Form with Validation

```tsx
            <main className='bg-gray-800'>
                <section className='flex justify-center min-h-screen items-center'>
                    <form onSubmit={handleSubmit((data)=>{
                        console.log(data);
                    })} className='flex flex-col  gap-y-3'>
                        <p className='text-white font-semibold text-2xl'>React Hook Form</p>

                        <input type='text' {...register("firstName", {
                          required: true, 
                          minLength: 4
                        })} placeholder='First Name'  /> 
                        <input type='text' {...register("lastName",)} placeholder='Last Name'  />
                        <input type="email"{...register("email", {
                          required: true, 
                          pattern: /^\S+@\S+$/i
                          }
                        )}  placeholder="Email"  />
                        <input type="tel" {...register("phoneNumber",{
                          required: true, 
                          minLength:10, 
                          maxLength: 12
                          }
                        )} placeholder="Phone Number"  />
                        <label htmlFor="Gender" >Gender</label>
                        <select {...register("gender", { required: true })}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <label htmlFor="isAdmin" >Admin RPL 2023?</label>
                        <div className='flex gap-3'>
                            <label htmlFor="" >Yes</label>
                            <input {...register("isAdmin", { required: true })} type="radio" value="Yes" />
                            <label htmlFor="" >No</label>
                            <input {...register("isAdmin", { required: true })} type="radio" value="No" />
                        </div>
                        <input type="submit" className='rounded w-[384px] h-[48px] cursor-pointer bg-pink-300'/>
                    </form>
                </section>
            </main>
```

- Showing Error
```tsx

const {register, handleSubmit, formState: { errors } } = useForm<FormValues>

console.log("errors", errors);

<input type='text' {...register("firstName", {required: true, minLength: 4})} placeholder='First Name'  /> 
<p >{errors.firstName?.message}</p>
<input type="email"{...register("email", {required: true, pattern: /^\S+@\S+$/i})}placeholder="Email"  />  
<p >{errors.email?.message}</p>
```

- Modularisation

```tsx
    register('firstName', {
        required: {
            value: true,
            message: "This is required!"
        } 
    });


  <input type='text' {...register("firstName")} placeholder='First Name'  /> 

```

- Create a functional component with fully customization for our own Input Form

```tsx
import React, { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}

const Input: FC<InputProps> = ({ label, name, register }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...register(name)} id={name} />
    </div>
  );
};

export default Input;
```

In this example, we're using the `UseFormRegister` type from react-hook-form to get the `register` function that we need to bind the input to the form. We're also passing in the `label` and `name` props to label the input and give it a unique name to reference it in the form.

We can then use this component in our form like this:
```tsx
import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

interface FormValues {
  firstName: string;
  lastName: string;
}

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" name="firstName" register={register} />
      <Input label="Last Name" name="lastName" register={register} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;

```

In this example, we're passing the `register` function from `useForm` down to the `Input` component, which uses it to bind the input to the form. We're also defining our form values interface and using it to type the `data` parameter in the `onSubmit` function.

### More advanced way to create an [Input Component](https://gist.github.com/dzikrisyairozi/05f36d85028ec733c9296aa9a61e6eb8) *!important*


## Conclusion and Next Steps

### Recap of what we have learned
- Create a simple Form
- Basic handling, controlling, and handling in a simple Form
- Fundamental of React Hook Form
  - React Hook Form API
- Implementing React Hook Form in NextJS and Typescript Environment
- Create a Functional Component for our Form

### [Tips and best practices for building forms using React Hook Form](https://gist.github.com/dzikrisyairozi/fba1c1d7cf6b80a339970274b952b109)

### [Further reading and resources for learning more about React and React Hook Form](https://gist.github.com/dzikrisyairozi/e0825dd857a3e822c4d0044ecab8fbc5)

## Challenge
- Fix/ Improve the first meeting assignment based on insights from demo with admin
- Create a new page on the same application to work on the second assignment .
- Build a **complex** form using React Hook Form based on your application idea.
  - **Create a Form Component**: Create a component that will contain your form. This component will use the useForm hook from React Hook Form.
  - **Define Form Fields**: Define the form fields in the component using the register method from React Hook Form. You can use the register method to define input fields, select boxes, radio buttons, checkboxes, and more.
  - **Define Validation Rules**: You can define validation rules for your form fields using the yup or joi validation library. React Hook Form integrates well with these libraries.
  - **Handle Form Submit**: Define a function to handle the form submit event using the handleSubmit method from React Hook Form. This function will receive the form data as an argument.
  - **Display Form Errors**: React Hook Form provides an easy way to display form errors using the errors object.
<br>
<br>
## An Example of a Complex Form, check in [_here_](https://form-example-nine.vercel.app/)
![](/modul-2/images/c1.jpeg)