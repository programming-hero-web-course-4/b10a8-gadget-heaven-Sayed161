import React,{useEffect} from "react";
import banner from "../../assets/Images/banner.jpg";
import { Outlet } from "react-router-dom";
import {  useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Home = () => {
  const location = useLocation();
  return (
    <>
    {
                location.pathname === '/' &&( 
                <HelmetProvider>
                  <Helmet> 
                    <title> Gadget Heaven</title> 
                    </Helmet>
                  </HelmetProvider>
              )}
    
  <div className="relative">
      <div className="hero bg-[#9538E2] text-white relative flex flex-col items-center justify-center rounded-b-2xl pb-12 lg:pb-36">
      <div className="hero-content text-center">
        <div className="max-w-5xl space-y-4">
          <h1 className="text-3xl lg:text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="py-4 lg:max-w-3xl mx-auto">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button className="btn bg-[#FFFFFF] rounded-4xl text-[#9538E2] font-bold mb-0 lg:mb-36">Shop Now</button>
        </div>
      </div>
      <div className="absolute top-100 lg:top-72 transform flex justify-center translate-y-0.5 border-2 border-gray-600 lg:border-white p-0 lg:p-4 rounded-none lg:rounded-2xl">
        <div className="relative">
        <img src={banner} alt="" className="rounded-none lg:rounded-2xl w-96 h-full lg:w-[1062px] lg:h-[563px] mx-0 lg:mx-auto"/>
        </div>
     </div>
    </div>
   <div>
   <Outlet></Outlet>
   </div>
  </div>
  </>
  );
};

export default Home;
