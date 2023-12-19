import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Header/Header';
import ErrorElement from './errorElement/ErrorElement';
import Home from './Home/Home';
import JobDetails from './JobDetails/JobDetails';
import Statistic from './Statistic/Statistic';
import AppliedJobs from './AppliedJobs/AppliedJobs';
import HomeGetStartedBtn from './HomeGetStartedBtn/HomeGetStartedBtn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('jobs.json'),
        
      },
      {      
          path: '/:id',
          element: <JobDetails></JobDetails> ,
          loader: () => fetch('jobs.json'),  
      },
      {
        path: 'statistics',
        element: <Statistic></Statistic>
      },
      {
        path: 'applied_jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'job_section',
        element: <HomeGetStartedBtn></HomeGetStartedBtn>,
        loader: () => fetch('jobs.json'),
      },
      {
        path:'*',
        element: <ErrorElement></ErrorElement>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorElement></ErrorElement>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
