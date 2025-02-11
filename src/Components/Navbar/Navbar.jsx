import React,{useEffect,useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
  const location = useLocation();
    const links = <>
    <li className={`${location.pathname === '/' ?'border-b-2 border-white': 'border-none' }`}><NavLink to="/">Home</NavLink></li>  
    <li className={`${location.pathname === '/statistics' ?'text-[#9538E2] font-black': 'border-none' }`}><NavLink to="statistics">Statistics</NavLink></li>  
    <li className={`${location.pathname === '/dashboard' ?'text-[#9538E2] font-black': 'border-none' }`}><NavLink to="dashboard">Dashboard</NavLink></li>  
    <li className={`${location.pathname === '/contact' ?'text-[#9538E2] font-black': 'border-none' }`}><NavLink to="contact">Contact Page</NavLink></li>  
    </>


      const storeCart = JSON.parse(localStorage.getItem('products'))||[];
      const wishCart = JSON.parse(localStorage.getItem('list'))||[];

    

  return (
    <div className={`${location.pathname === '/' ?'bg-[#9538E2] text-white rounded-t-2xl': 'border-none' }`}>
      <div className="navbar  max-w-7xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-[#9538E2] text-white ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        class="menu menu-sm dropdown-content bg-[#700ac3] text-white  rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="indicator">
    <a className="btn btn-ghost rounded-full"><AiOutlineShoppingCart className="text-xl"/>{storeCart.length > 0 &&(<span className="indicator-item badge badge-secondary">{storeCart.length}</span>)}</a>
    </div>
    <div className="indicator">
    <a className="btn btn-ghost text-xl rounded-full"><FaRegHeart /> {
      wishCart.length > 0 && (<span className="indicator-item badge badge-secondary">{wishCart.length}</span>)
}</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar
