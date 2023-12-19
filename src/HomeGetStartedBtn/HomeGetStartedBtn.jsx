import React, { useState }  from 'react';
import Footer from '../Footer/Footer';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import { Link, useLoaderData } from 'react-router-dom';
import JobApplications from '../JobApplications/JobApplications';


const HomeGetStartedBtn = () => {
    const items = useLoaderData();
    const [seeMore, setSeeMore] = useState(false);
    console.log(items);

    const showJobDetails = id =>{
        console.log(id);
    }
    return (
        <div>
           <section id='job_section'>
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
            </section> 
        </div>
    );
};

export default HomeGetStartedBtn;