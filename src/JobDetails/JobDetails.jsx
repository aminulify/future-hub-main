import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import Footer from '../Footer/Footer';
import OtherHeaders from '../OtherHeaders/OtherHeaders';
import { addToDb } from '../../utilities/fakedb';
// toast 
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast("Submit Done",{
    style: {
        background: '#1dbf02',
        color: 'white',
        fontWeight: '400'
    }
});
const notified = () => toast("Already Submitted",{
    style: {
        background: '#1dbf02',
        color: 'white',
        fontWeight: '400'
    }
});

const JobDetails = () => {

    // const path = window.location.pathname;
    // const windowPath = parseInt(path.slice(1,2));
    // console.log(parseInt(path.slice(1,2)));
    const {id} = useParams();
    // console.log(id); 
    const jobDetails = useLoaderData();
    // console.log(jobDetails);
    const details = jobDetails.filter(d => d.id == id);
    // console.log(details);

    const [submit, setSubmit] = useState(false);
    const appliedJob = (id) =>{
        addToDb(id);
        const exist = jobDetails.find(d=> d.id == id);
        if(exist){
            setSubmit(!submit)
        }
       
        console.log(id);
    }
    // let details[0];
    // jobDetails.forEach((el, index) => {
    //     if(el.id===windowPath){
    //         details[0]=el;
    //     }
        
    // })
    // console.log(details[0]);
    
    return (

        <div>          
            <OtherHeaders><h1 className='font-bold text-3xl relative top-1/2 flex justify-center text-slate-700'>Job Details</h1></OtherHeaders>

            <main className='mx-12 lg:mx-28 md:mx-10 my-16 view-job-main'>
                <section className='view-job-left-side'>
                    <h1 className='font-semibold text-3xl text-slate-300'>{details[0].company_name}</h1>
                    <h3 className='text-slate-700'>Job Description: <span>{details[0].job_description}</span></h3>
                    <h3 className='text-slate-700'>Job Responsibility: <span>{details[0].job_responsibility}</span></h3>
                    <h3 className='text-slate-700'>Educational Requirements: <p>{details[0].educational_requirements}</p></h3>
                    <h3 className='text-slate-700'>Experiences: <p>{details[0].experiences}</p></h3>
                </section>

                <section>
                    <aside className='view-job-right-side p-5 rounded-md'>
                        <h1 className='text-slate-700 font-semibold'>Job Details</h1>
                        <hr />
                        {/* job details  */}
                        <div className='job-details-paragraph'>
                            <div className='flex gap-1 items-center'>
                                <img src="money.png" alt="" />
                                <h4>Salary: <span>{`${details[0].salary} (Per Annum)`}</span></h4>
                            </div>
                            <div className='flex gap-1 items-center mt-2 mb-4'>
                                <img src="calendar.png" alt="" />
                                <h4>Job Title: <span>{details[0].job_title}</span></h4>
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
                    
                        <div onClick={()=>appliedJob(id)}>
                            <button onClick={submit ? ()=>notify(id): ()=> notified(id)} className='w-full mt-3'>Apply Now</button>
                            <Toaster></Toaster>
                        </div>
                    
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;