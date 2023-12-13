import React, { useState } from 'react';
import './Home.css';
import JobCategory from '../JobCategory/JobCategory';
import Footer from '../Footer/Footer';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import { useLoaderData } from 'react-router-dom';
import JobApplications from '../JobApplications/JobApplications';

const Home = () => {
    const items = useLoaderData();
    const [seeMore, setSeeMore] = useState(false);

    const showJobDetails = id =>{
        console.log(id);
    }

    return (
        <div id='/'>
            <section className='section-header'>
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
                <div className='section-bottom'>
                    <img src="bg1.png" alt="background-style" />
                </div>
            </section>
            <hr className='text-slate-600 border' />

            <JobCategory></JobCategory>
            <FeatureJobs></FeatureJobs>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 mx-12 lg:mx-16'>
            {
                seeMore ? items.map(item => <JobApplications
                    key={item.id}
                    item = {item}
                    showJobDetails = {showJobDetails}
                ></JobApplications>) : items.slice(0,4).map(item => <JobApplications
                    key={item.id}
                    item = {item}
                    showJobDetails = {showJobDetails}
                ></JobApplications>)
            }
            </div>
            <div className='text-center'>
            <button onClick={()=>setSeeMore(!seeMore)} className='my-10'>{(seeMore ? "See Less" : "See More")}</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;