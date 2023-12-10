import React from 'react';
import './Home.css';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {
    return (
        <div>
            <main className='header-main'>
                <div className="header-left">
                    <h1 className='heading text-slate-700'>One Step Closer To Your <span className='gradient-color'>Dream Job</span></h1>
                    <p className='text-sm text-slate-600 mb-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <div className='header-right'>
                    <img src="user.png" className='user-img' alt="Person Image" />
                </div>
            </main>
            <hr className='text-slate-600 border' />

            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;