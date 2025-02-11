import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import {Bar,
    ResponsiveContainer,
    XAxis,
    CartesianGrid,
    ComposedChart,
    Tooltip,
    Legend,
    Area,
    Line,
    YAxis,
  } from 'recharts';
const Statistics = () => {
    const data = useLoaderData();
    const [phone,setPhones]=useState([]);
    useEffect(()=>{
        const labels = data.map(product=>({
            name: product.product_title,
            price: product.price,
        }));
        setPhones(labels);
    } ,[data]);
  return (
    <>
    <div className="hero bg-[#9538E2] text-white flex flex-col pb-4">
           <div className="max-w-5xl space-y-2 text-center">
             <h1 className="text-3xl lg:text-5xl font-bold mt-12">Statistics</h1>
             <p className="py-4 lg:max-w-3xl mx-auto">
             Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
             </p>
            <div>
          
            </div>
 

           </div>
     </div>
    <div className='max-w-7xl m-0 lg:mx-auto'>
    <h1 className="text-2xl font-bold mt-12">Statics</h1>
    <ResponsiveContainer width="100%" height={450}>
        <ComposedChart
          width={500}
          height={400}
          data={phone}
          margin={{
            top: 20,
            right: 30,
            bottom: 60,
            left: 40,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3"/>
          <XAxis dataKey="name" scale="band" stroke='#0B0B0BB3' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" fill="#BF87EE" stroke="#9538E2" />
          <Bar dataKey="price" barSize={25} fill="#9538E2" />
          <Line type="monotone" dataKey="name" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    
    </div>
    
    </>
  )
}

export default Statistics
