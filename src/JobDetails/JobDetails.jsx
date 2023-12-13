import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css';
import Footer from '../Footer/Footer';
const JobDetails = () => {

    const path = window.location.pathname;
    const windowPath = parseInt(path.slice(1,2));
    // console.log(parseInt(path.slice(1,2)));

    const jobDetails = useLoaderData();
    let target;
    jobDetails.forEach((el, index) => {
        if(el.id===windowPath){
            target=el;
        }
        
    })
    console.log(target);
    
    return (
        <div>          
            <section className="viewJobTop relative top-0">
                <div className='absolute top-0 right-0'>
                    <img src="bg2.png" alt="" />
                </div>
                <h1 className='font-bold text-3xl relative top-1/2 flex justify-center text-slate-700'>Job Details</h1>
                <div className='absolute bottom-0 left-0'>
                    <img src="bg1.png" alt="" />
                
                </div>
            </section>
            <main className='mx-12 lg:mx-28 md:mx-10 my-16 view-job-main'>
                <section className='view-job-left-side'>
                    <h1 className='font-semibold text-3xl text-slate-300'>{target.company_name}</h1>
                    <h3 className='text-slate-700'>Job Description: <span>{target.job_description}</span></h3>
                    <h3 className='text-slate-700'>Job Responsibility: <span>{target.job_responsibility}</span></h3>
                    <h3 className='text-slate-700'>Educational Requirements: <p>{target.educational_requirements}</p></h3>
                    <h3 className='text-slate-700'>Experiences: <p>{target.experiences}</p></h3>
                </section>

                <section>
                    <aside className='view-job-right-side p-5 rounded-md'>
                        <h1 className='text-slate-700 font-semibold'>Job Details</h1>
                        <hr />
                        {/* job details  */}
                        <div className='job-details-paragraph'>
                            <div className='flex gap-1 items-center'>
                                <img src="money.png" alt="" />
                                <h4>Salary: <span>{`${target.salary} (Per Annum)`}</span></h4>
                            </div>
                            <div className='flex gap-1 items-center mt-2 mb-4'>
                                <img src="calendar.png" alt="" />
                                <h4>Job Title: <span>{target.job_title}</span></h4>
                            </div>
                        </div>

                        <h1 className='text-slate-700 font-semibold'>Contact Information</h1>
                        <hr />

                        <div className='job-details-paragraph'>
                            <div className='flex gap-1 items-center'>
                                <img src="phone.png" alt="" />
                                <h4>Phone: <span>+88016-866-213</span></h4>
                            </div>
                            <div className='flex gap-1 items-center mt-2'>
                                <img src="email.png" alt="" />
                                <h4>Email: <span>mdfahad1024@gmail.com</span></h4>
                            </div>
                            <div className='flex gap-1 mt-2 items-center'>
                                <img src="location2.png" alt="" />
                                <h4>Address: <span>South Keraniganj, Dhaka</span></h4>
                            </div>
                        </div>
                    </aside>
                    <button className='w-full mt-3'>Apply Now</button>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;