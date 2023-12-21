import React from 'react';
import './Statistic.css';
import OtherHeaders from '../OtherHeaders/OtherHeaders';
import { Bar, BarChart, Brush, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = () => {
    const data = [
        {
          "id": "Ass-1",
          "Name": "Build your new year new mission website",
          "Result": 60,
        },
        {
            "id": "Ass-2",
          "Name": "Responsive website assignment",
          "Result": 60
        },
        {
            "id": "Ass-3",
          "Name": "Responsive landing page",
          "Result": 60,
        },
        {
            "id": "Ass-4",
          "Name": "Javascript problem solving",
          "Result": 30,
        },
        {
            "id": "Ass-5",
          "Name": "Geometry genius assignment requirements",
          "Result": 50,
        },
        {
            "id": "Ass-6",
          "Name": "ES6 and API related Assignment",
          "Result": 28,
        },
        {
            "id": "Ass-7",
          "Name": "Devtool and debugging",
          "Result": 50,
        },
        {
            "id": "Ass-8",
            "Name": "React Single page application",
            "Result": 30,
          },
      ]
      
                            
    return (
        <div>
            <OtherHeaders>
                <h1 className='font-bold text-3xl relative top-1/2 flex justify-center text-slate-700'>Assignment Statistics</h1>
            </OtherHeaders>

            {/* chart design  */}
            <section className="chart-decoration flex justify-center my-10">
                <BarChart width={460} height={300} data={data}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Brush/>
                <Bar dataKey="Name" />
                <Bar dataKey="Result" fill="#8884d8" />
                </BarChart>
            </section>
        </div>
    );
};

export default Statistic;