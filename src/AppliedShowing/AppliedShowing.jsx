import React from 'react';
import './AppliedShowing.css';

const AppliedShowing = ({jobApp}) => {
    // console.log(jobApp);
    return (
        <div className='grid grid-cols-1 lg:mx-20 md:mx-16 mx-10 p-5 border rounded-xl my-8 items-center lg:flex lg:justify-between md:flex md:justify-between'>
            <aside className='lg:flex md:flex gap-10'>
                <div className='job-logo mb-3 lg:mb-0 md:mb-0'>
                    <img src={jobApp.logo} alt="" />
                </div>
                <div className=''>
                    <h2 className='text-xl font-bold text-slate-700'>{jobApp.job_title}</h2>
                    <p className='text-slate-500 text-sm'>{jobApp.company_name}</p>
                    <div className='flex gap-2'>
                        <a className='job-style-btn gradient-color'>{jobApp.remote_or_onsite}</a>
                        <a className='job-style-btn gradient-color'>{jobApp.job_type}</a>
                    </div>
                    <div className='lg:flex md:flex gap-6 mt-2'>
                        <p className='flex gap-1 items-center mb-3 lg:mb-0 md:mb-0'><img src="location2.png" alt="location-icon" />{jobApp.location}</p>
                        <p className='flex gap-1 items-center'><img src="money.png" alt="money-icon" />{jobApp.salary}</p>
                     </div>
                </div>

            </aside>
            <aside className='mt-4 md:mt-0 lg:mt-0'>
                <button>View Details</button>
            </aside>
        </div>
    );
};

export default AppliedShowing;