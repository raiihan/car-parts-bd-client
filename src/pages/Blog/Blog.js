import React from 'react';
import q4 from '../../assets/q4.png';
const Blog = () => {
    return (
        <div className='container mx-auto mt-16'>
            <div className="w-full sm:w-3/4 lg:w-2/3 mx-auto mt-5 md:mt-0 ">
                <div className='mb-6 shadow-2xl p-6'>
                    <h2 className='text-4xl text-gray-700 my-4'> How will you improve the performance of a React Application?</h2>
                    <div className='text-justify'>
                        If you completed  a react app then you should focus on performance of the app. And optimized the app for increase the performance.

                        <p className='font-bold text-xl'>Techniques of improve the performance React app</p>
                        <p className='font-bold text-lg'>  Using Immutable Data Structures</p>
                        <p>Data immutability, which comes from the functional programming world, can be applied to the design of front-end apps. It can have many benefits, such as:</p>

                        <p className='font-bold'> Zero side-effects</p>
                        <p>Immutable data objects are simpler to create, test, and use;
                            Helps prevent temporal coupling;
                            Easier to track changes.</p>
                        <p className='font-bold text-lg my-3'>Memoizing React components to prevent unnecessary re-renders.</p>
                        <p>Memoization is an optimization strategy that caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.</p>
                        <p className='font-bold'> Using React.memo()</p>
                        <p>React.memo is a higher-order component used to wrap a purely functional component to prevent re-rendering if the props received in that component never changes</p>
                        <p className='font-bold'>Using the useCallback Hook</p>
                        <p>With the useCallback Hook, the incrementCount function only redefines when the count dependency array changes</p>
                        <p className='font-bold text-lg my-3'>Code-splitting in React using dynamic import()</p>
                        <p>Code-splitting is another important optimization technique for a React application. By default, when a React application renders in a browser, a “bundle” file containing the entire application code loads and serves to users at once. This file generates by merging all the code files needed to make a web application work.</p>

                        <p className='font-bold text-lg my-3'>Multiple Chunk Files</p>
                        <p>Your application always begins with a few components. You start adding new features and dependencies, and before you know it, you end up with a huge production file.</p>
                        <p className='font-bold text-lg my-3'>Avoid Inline Function Definition in the Render Function.</p>
                        <p>Since functions are objects in JavaScript ({ } !== { }), the inline function will always fail the prop diff when React does a diff check. Also, an arrow function will create a new instance of the function on each render if it's used in a JSX property. This might create a lot of work for the garbage collector.</p>
                        <p className='font-bold text-lg my-3'>Avoid Async Initialization in componentWillMount()</p>
                        <p>componentWillMount() is only called once and before the initial render. Since this method is called before render(), our component will not have access to the refs and DOM element.</p>
                    </div>
                </div>
                <div className='mb-6 shadow-2xl p-6'>
                    <h2 className='text-4xl text-gray-700 my-4'> What are the different ways to manage a state in a React application?</h2>
                    <div className='text-justify'>
                        <p>Modern React, we build our applications with functional components. Here  state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. React functional components can store information even after execution.</p>
                        <p className='font-bold'> Common State in react</p>
                        <ol>
                            <li>1. UseState</li>
                            <li>2. useEffect</li>
                            <li>3. React context</li>
                            <li>4. UseReducer</li>
                        </ol>
                        <p className='font-bold text-lg'>You can managed state different ways like Redux, Recoil Jotai</p>
                        <p className='font-bold'>Redux:-</p>
                        <p>Redux is a tool that comes to solve both of the problems mentioned before (prop drilling and unpredictable state behavior on frequent and complex state changes). There are three main building blocks in Redux:</p>
                        <ol>
                            <li>A store — an object that holds the app state data</li>
                            <li>A reducer — a function that returns some state data, triggered by an action type</li>
                            <li>An action — an object that tells the reducer how to change the state. It must contain a type property, and it can contain an optional payload property</li>
                        </ol>
                        <p className='font-bold'>Recoil:-</p>
                        <p>Recoil is an open source state management library specifically for React built by Facebook.</p>
                        <p className='font-bold'>Jotai:-</p>
                        <p>Jotai is an open source state management library built for React that is inspired by Recoil. It differs from Recoil in looking for an even more minimalistic API – it doesn't use string keys and it's TypeScript-oriented</p>
                    </div>
                </div>
                <div className='mb-6 shadow-2xl p-6'>
                    <h2 className='text-4xl text-gray-700 my-4'> How does prototypical inheritance work?</h2>
                    <div className='text-justify'>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.</p>
                        <p className='mb-3'>The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
                        <p className='mb-3'>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
                            JavaScript objects are dynamic "boxes" of properties.</p>
                        <p className='mb-3'>JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.</p>
                    </div>
                </div>
                <div className='mb-6 shadow-2xl p-6'>
                    <h2 className='text-4xl text-gray-700 my-4'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <div className='text-justify'>
                        <p className='font-bold'>Here Find the product by name I use Filter Method. I will run the filter method on the Products Array then i gave return a Array with my expected value </p>

                        <p>You See code example Below</p>
                        <img src={q4} alt="" />
                    </div>
                </div>
                <div className='mb-6 shadow-2xl p-6'>
                    <h2 className='text-4xl text-gray-700 my-4'>What is a unit test? Why should write unit tests?</h2>
                    <div className='text-justify'>
                        <p className='font-bold text-lg'>Unit Test:-</p>
                        <p>UNIT TESTING is a type of software or web application  testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code or web code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                        <p className='font-bold text-lg mt-3'>Why should write unit tests</p>
                        <p>A proper unit testing is done in early development, then it saves time and money in the end.</p>
                        <ol>
                            <li>1. Unit tests help to fix bugs early in the development cycle and save costs.</li>
                            <li>2. It helps the developers to understand the testing code base and enables them to make changes quickly</li>
                            <li>3. Good unit tests serve as project documentation</li>
                            <li>4. Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again</li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;