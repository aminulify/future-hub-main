import React from 'react';
import './JobCategory.css';

const JobCategory = () => {
    return (
        <div className='m-20'>
            <h1 className='mb-2 text-3xl font-bold text-slate-700 text-center'>Job Category List</h1>
            <p className='text-slate-600 text-sm text-center mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <main className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-center gap-10'>
                <div className='jobsCategory-section'>
                    <img src="accounts.png" alt="accounts-icon" className='jobs-icon' />
                    <h2 className='text-lg font-bold mt-2 text-slate-700'>Account & Finance</h2>
                    <p className='text-sm text-slate-600'>120+ Jobs Available</p>
                </div>
                <div className='jobsCategory-section'>
                    <img src="creative.png" alt="creative-icon" className='jobs-icon' />
                    <h2 className='text-lg font-bold mt-2 text-slate-700'>Creative Design</h2>
                    <p className='text-sm text-slate-600'>180+ Jobs Available</p>
                </div>
                <div className='jobsCategory-section'>
                    <img src="marketing.png" alt="marketing-icon" className='jobs-icon' />
                    <h2 className='text-lg font-bold mt-2 text-slate-700'>Marketing & Sales</h2>
                    <p className='text-sm text-slate-600'>220+ Jobs Available</p>
                </div>
                <div className='jobsCategory-section'>
                    <img src="chip.png" alt="chip-icon" className='jobs-icon' />
                    <h2 className='text-lg font-bold mt-2 text-slate-700'>Engineering Job</h2>
                    <p className='text-sm text-slate-600'>110+ Jobs Available</p>
                </div>
            </main>
        </div>
    );
};

export default JobCategory;