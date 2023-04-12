import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-5xl font-semibold mb-16 mt-8'>Question and Answer Part</h2>

            <div className='text-left'>
                <h4 className='text-3xl mb-4'>When should we use Context API?</h4>
                <p className='text-xl mb-8'><span className='3xl font-semibold'>Answer: </span> When you need to communicate data across components that aren't related by a parent-child connection, you should utilize React's Context API. Without having to manually feed props down at every level, it offers a means to transfer data across the component tree. In a variety of situations, we may use this context API. such as theme switching, user authentication, multilingual apps, and intricate component hierarchies</p>

                <h4 className='text-3xl mb-4'>what is coustom hook of react?</h4>
                <p className='text-xl mb-8'> <span className='3xl font-semibold'>Answer: </span> A custom hook in React is a JavaScript function with the word "use" at the beginning that enables you to share stateful functionality between components. To quickly share reusable functionality across several components in a React application, custom hooks are utilized to encapsulate it. You may extract and reuse functionality from various components that is often utilized by using custom hooks. They are particularly helpful for isolating issues in your application and abstracting away repetitive or difficult code. For instance, you may use a custom hook to handle user authentication, get data from an API, or manage the state of a form.Writing a function that makes use of one or more of the built-in React hooks is all that is required to develop a custom hook (such as useState, useEffect, useContext, etc.). The state and behavior given by the hook may then be accessed in your components by using this function.</p>

                <h4 className='text-3xl mb-4'>what is useRef and what is it's uses?</h4>
                <p className='text-xl mb-8'> <span className='3xl font-semibold'>Answer: </span> A mutable reference to a value that survives across views may be created in React by using the useRef hook. In order to access DOM nodes or save modified data that are not a part of the component state, useRef is mostly used.
                Listed below are some typical use cases for useRef: accessing DOM nodes, storing previous values, caching expensive computations, Storing a reference to a child component.</p>

                <h4 className='text-3xl mb-4'>what is useMemo and what is it's uses?</h4>
                <p className='text-xl mb-8'> <span className='3xl font-semibold'>Answer: </span> In React, a value that requires a lot of processing to calculate is memoized using the useMemo hook. UseMemo's main application is to improve performance by caching a costly calculation's outcome so that it doesn't have to be recalculated for each render. Here are a few such scenarios for useMemo: expensive calculations, optimization, reducing props drilling</p>


            </div>
        </div>
    );
};

export default Blog;