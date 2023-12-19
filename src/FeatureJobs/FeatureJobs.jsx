import React from 'react';
import './FeatureJobs.css';
import JobApplications from '../JobApplications/JobApplications';

const FeatureJobs = () => {
   
    return (
        <div className='mx-12' id='jobs-section'>
            <h1 className='mb-2 text-3xl font-bold text-slate-700 text-center'>Featured Jobs</h1>
            <p className='text-slate-600 text-sm text-center mb-10 lg:mx-80'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            
        </div>
    );
};

export default FeatureJobs;