import React, { useState } from 'react';
import './Home.css';
import JobCategory from '../JobCategory/JobCategory';
import { Link, useLoaderData } from 'react-router-dom';
import JobApplications from '../JobApplications/JobApplications';
import HomeGetStartedBtn from '../HomeGetStartedBtn/HomeGetStartedBtn';

const Home = () => {
   

    return (
        <div id='/'>
            <section className='section-header'>
                <main className='header-main'>
                    <div className="header-left">
                        <h1 className='heading text-slate-700'>One Step Closer To Your <span className='gradient-color'>Dream Job</span></h1>
                        <p className='text-sm text-slate-600 mb-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Link to="/job_section"><button>Get Started</button></Link>
                    </div>
                    <div className='header-right'>
                        <img src="user.png" className='user-img' alt="Person Image" />
                    </div>
                </main>
                <div className='section-bottom'>
                    <img src="bg1.png" alt="background-style" />
                </div>
            </section>
            <hr className='text-slate-600 border' />

            <JobCategory></JobCategory>
            
            {/* Get Started button  */}
            <HomeGetStartedBtn></HomeGetStartedBtn>
        </div>
    );
};

export default Home;