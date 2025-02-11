import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { ToastContainer } from 'react-toastify';
const Root = () => {
  const location = useLocation();
  return (
    <div className=''>

      <ToastContainer position='top-center'/>

      <div className='mt-8 rounded-2xl mx-4 lg:mx-10'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
      <div className='relative mt-96'>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Root
