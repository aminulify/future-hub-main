import React from 'react';
import './JobApplications.css';

const JobApplications = ({item}) => {
    console.log(item);
    const {logo, company_name, job_title, remote_or_onsite, job_type, location, salary} = item;
    return (
        <div className='p-8 border rounded-e-md job-section'>
            <div className='logo-img mb-3'>
            <img src={logo} alt="" />
            </div>
            <h2 className='text-slate-700 font-semibold text-lg'>{job_title}</h2>
            <p className='text-slate-400'>{company_name}</p>
            <div className='flex gap-3'>
                <a className='job-style-btn gradient-color'>{remote_or_onsite}</a>
                <a className='job-style-btn gradient-color'>{job_type}</a>
            </div>
            <div className='lg:flex md:flex gap-6 mt-4'>
            <p className='flex gap-1 items-center mb-3 lg:mb-0 md:mb-0'><img src="location2.png" alt="location-icon" />{location}</p>
            <p className='flex gap-1 items-center'><img src="money.png" alt="money-icon" />{salary}</p>
            </div>
            <button className='mt-4'>View Details</button>
        </div>
    );
};

export default JobApplications;