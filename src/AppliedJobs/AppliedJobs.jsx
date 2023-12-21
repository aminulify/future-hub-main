import React, { useEffect, useState } from 'react';
import './AppliedJobs.css';
import OtherHeaders from '../OtherHeaders/OtherHeaders';
import { useLoaderData } from 'react-router-dom';

import AppliedShowing from '../AppliedShowing/AppliedShowing';
import { getShoppingCart } from '../../utilities/fakedb';


const AppliedJobs = () => {   
    const [jobs, setJobs] = useState([]);  
    const [appliedJobs, setAppliedJobs] = useState([]);
    const getDataFromJson = useLoaderData();

    useEffect(()=>{
        setJobs(getDataFromJson);

    },[])
    // console.log(jobs);

    useEffect(()=>{
        const storedData = getShoppingCart();
        // console.log(storedData);
        let addedData = [];

        for(let id in storedData){
            // console.log(idValue);
            const data = jobs.filter(job=> job.id == id);
            addedData.push(data);       
        }
        // console.log(addedData);
        setAppliedJobs(addedData);
    },[])
    // console.log(appliedJobs);
    return (
        <div>
            <OtherHeaders>
                <h1 className='font-bold text-3xl relative top-1/2 flex justify-center text-slate-700'>Applied Jobs</h1>
            </OtherHeaders>

            {/* applied job  */}
            {
                appliedJobs.map(jobApp => <AppliedShowing
                    key={jobApp[0].id}
                    jobApp = {jobApp[0]}
                ></AppliedShowing>)
                // appliedJobs.map(jobApp => console.log(jobApp[0].id))
                
            }
            
        
        </div>
    );
};

export default AppliedJobs;