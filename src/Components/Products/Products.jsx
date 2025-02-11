import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useLocation, useParams } from 'react-router-dom'
import Product from '../Product/Product';

const Products = () => {
    const location = useLocation();
    const data = useLoaderData();
    const [pro,setPro] = useState([]);
    const { category } = useParams();
    useEffect(()=>{
      if(category){
        setPro(data.filter(product => product.category === category));
       }
       else{
         setPro(data);
       }
    },[category,data])
    
  return (
    <div className='relative mt-100 z-10 text-red max-w-7xl mx-auto text-center'>
      <h2 className='text-4xl font-bold'>Explore Cutting-Edge Gadgets</h2>
      <div className='flex flex-col lg:flex-row mt-12 gap-4'>
     <div>
     <ul className="menu menu-vertical lg:menu-horizontal bg-base-100 border border-gray-200 rounded-box w-full lg:w-56 space-y-4 p-4">
  <li className={`${location.pathname === '/' ?'bg-[#9538E2] text-white': 'bg-[#09080F0D] text-black'} rounded-2xl p-2 w-full`}><Link to="/">All Products</Link></li>
  <li className={`${location.pathname === '/laptops' ?'bg-[#9538E2] text-white': 'bg-[#09080F0D] text-black'} rounded-2xl p-2 w-full`}><Link to="/laptops">Laptops</Link></li>
  <li className={`${location.pathname === '/phones' ?'bg-[#9538E2] text-white': 'bg-[#09080F0D] text-black'} rounded-2xl p-2 w-full`}><Link to="/phones">Phones</Link></li>
  <li className={`${location.pathname === '/accessories' ?'bg-[#9538E2] text-white': 'bg-[#09080F0D] text-black'} rounded-2xl p-2 w-full`}><Link to="/accessories">Accessories</Link></li>
  <li className={`${location.pathname === '/watches' ?'bg-[#9538E2] text-white': 'bg-[#09080F0D] text-black'} rounded-2xl p-2 w-full`}><Link to="/watches">Smart Watches</Link></li>
  <li className={`${location.pathname === '/macbook' ?'bg-[#9538E2] text-white': 'bg-[#09080F0D] text-black'} rounded-2xl p-2 w-full`}><Link to="/macbook">MacBook</Link></li>
  <li className={`${location.pathname === '/iphones' ?'bg-[#9538E2] text-white': 'bg-[#09080F0D] text-black'} rounded-2xl p-2 w-full`}><Link to="/iphones">Iphone</Link></li>
  <li className={`${location.pathname === '/tv' ?'bg-[#9538E2] text-white': 'bg-[#09080F0D] text-black'} rounded-2xl p-2 w-full`}><Link to="/tv">Television</Link></li>

  
</ul>
     </div> 
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
    {pro.length === 0?
  (
    <div className='text-center'>
      <h2 className="text-3xl font-bold">No Data Availble</h2>
    </div>
  )  :(
    pro.map(product => <Product key={product.product_id} product={product}></Product>)
)
  }
</div>
<div>
     </div>
      </div>
    </div>
  )
}

export default Products
