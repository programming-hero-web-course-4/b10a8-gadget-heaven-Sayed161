import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto'>
         <div className='text-center py-12 border-b border-gray-200 pt-36'>
        <h1 className="text-4xl font-bold">Gadget Heaven</h1>
        <p className='text-[#09080F99] mt-4'>Leading the way in cutting-edge technology and innovation.</p>
        </div>
      <footer className="footer sm:footer-horizontal text-base-content p-10">
       
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

    </div>
  )
}

export default Footer
