import React from 'react';
import OtherHeaders from '../OtherHeaders/OtherHeaders';

const Blog = () => {
    return (
        <div className=''>
            <OtherHeaders>
                <h1 className='font-bold text-3xl relative top-1/2 flex justify-center text-slate-700'>Blogs</h1>
            </OtherHeaders>

            <aside className='mx-10 lg:mx-20 md:mx-16 my-10'>
                <div className='mt-5'>
                    <h3 className='font-semibold text-lg text-slate-700'>When should use context API?</h3>
                    <p className='text-slate-500 text-sm'>The React Context API is used to share data across components when the data needs to be accessed by multiple components. </p>
                </div>
                <div className='mt-5'>
                    <h3 className='font-semibold text-lg text-slate-700'>What is custom hook in react?</h3>
                    <p className='text-slate-500 text-sm'>Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use".</p>
                </div>
                <div className='mt-5'>
                    <h3 className='font-semibold text-lg text-slate-700'>What is useRef and use it in which task?</h3>
                    <p className='text-slate-500 text-sm'>* Use meaningful variable names for your useRef references to enhance code readability.<br></br>
    * Remember to pass the useRef reference to the ref attribute of the corresponding input element.<br></br>
    * Avoid manipulating the DOM directly outside the useEffect hook or event handlers.<br></br> * useRef should be used for referencing and accessing DOM elements, not for direct manipulation.<br></br>
    * Refrain from modifying the useRef values directly, as React will not re-render the component if you change the value without using the current property.</p>
                    </div>
                    <div className='mt-5'>
                        <h3 className='font-semibold text-lg text-slate-700'>What is useMemo and use it in which task?</h3>
                        <p className='text-slate-500 text-sm'>useMemo is a function provided by React, a popular JavaScript library for building user interfaces. It is used to optimize performance by memoizing the result of a computation and only recalculating it when necessary. clas</p>
                    </div>
            </aside>
        </div>
    );
};

export default Blog;