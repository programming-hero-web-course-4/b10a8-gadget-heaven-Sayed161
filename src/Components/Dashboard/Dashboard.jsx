import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { GiSettingsKnobs } from "react-icons/gi";
import group from "../../assets/Images/Group.png";
import Cartitem from '../Cartitem/Cartitem';
import Wishlist from '../Wishlist/Wishlist';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Dashboard = () => {
  let totalprice = 0;
  const data = useLoaderData();
  const [products,setProducts] = useState([]);
  const [wish,setWish] = useState([]);
  const cartItemDelte= (productId) => {
    let storeCart = JSON.parse(localStorage.getItem('products'))||[];
    
    storeCart = storeCart.filter((pro)=>pro!== productId);

    localStorage.setItem('products',JSON.stringify(storeCart));
    
    setProducts((prev)=>prev.filter((pro)=>pro.product_id !== productId));
    
  }
  const WishItemDelete = (productId)=>{
    let wishCart = JSON.parse(localStorage.getItem('list'))||[]; 
    wishCart = wishCart.filter((pro)=>pro!== productId);
    localStorage.setItem('list',JSON.stringify(wishCart));
    setWish((prev)=>prev.filter((pro)=>pro.product_id !== productId));
  }
  const navigate = useNavigate();
 
  const getProduct =()=>{
    let storeCart = JSON.parse(localStorage.getItem('products'))||[];
    const cartItems = data.filter((pro)=>storeCart.includes(pro.product_id));
    setProducts(cartItems);
  }
  const getWishList =()=>{
    let wishCart = JSON.parse(localStorage.getItem('list'))||[];
    const cartItems = data.filter((pro)=>wishCart.includes(pro.product_id));
    setWish(cartItems);
  }
  useEffect(()=>{
    getProduct();
  },[])

  useEffect(()=>{
    getWishList();
  },[])
  const showModal=()=>{
    document.getElementById('my_modal_1').showModal();
  }
  const CloseModal=()=>{
    document.getElementById('my_modal_1').close();
    navigate('/',{replace:true});
    setProducts([]);
    setWish([]);
  }
  const purchased = ()=>{
    localStorage.removeItem('products');
    localStorage.removeItem('list');
    showModal();
  }

  products.map(pro => totalprice = totalprice+pro.price);
  const [tabIndex, setTabIndex] = useState(0);
  const sorting=()=>{
   const sortedItem  = [...products].sort((a,b)=>b.price-a.price);
    setProducts(sortedItem);
    
  }
  


   const location = useLocation();

  return (
    <>

          {
            location.pathname === '/dashboard' &&( 
            <HelmetProvider>
              <Helmet> 
                <title>DashBoard | Gadget Heaven</title> 
                </Helmet>
              </HelmetProvider>
          )}
          
        
       
     <div className="hero bg-[#9538E2] text-white flex flex-col pb-4">
            <div className="max-w-5xl space-y-2 text-center">
              <h1 className="text-3xl lg:text-5xl font-bold mt-12">Dashboard</h1>
              <p className="py-4 max-w-3xl mx-4 lg:mx-auto">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
              </p>
             <div>
             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
              <TabList className='flex justify-center items-center rounded-2xl gap-6'>
                <Tab className={`px-6 lg:px-16 py-4 font-semibold border border-gray-200 rounded-2x cursor-pointer ${tabIndex === 0 ?'text-[#9538E2] bg-[#9538E2]':'text-white'}`}>Cart</Tab>
                <Tab className={`px-6 lg:px-16 py-4 font-semibold border border-gray-200 rounded-2xl cursor-pointer ${tabIndex === 1 ?'text-[#9538E2] bg-[#9538E2]':'text-white'}`}>Wishlist</Tab>
              </TabList>
          </Tabs>
             </div>
            </div>
      </div>
      <Tabs>
            <div className='text-black mt-8 bg-white max-w-7xl mx-auto'>
     
       {
            tabIndex === 0 &&( <TabPanel>
              <div className='flex flex-col lg:flex-row justify-between items-center text-xl'>
              <h1 className='font-bold text-2xl'>Cart</h1>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-6 items-center'>
                <div>
                <h1 className='font-bold'>Total Cost: ${totalprice.toFixed(2)}</h1>
                </div>
                <div>
                <button onClick={sorting} className='btn btn-outline border border-[#9538E2] text-[#9538E2] font-bold rounded-4xl px-6 py-5 lg:ml-0 ml-4'>
                Sort by Price 
                  <GiSettingsKnobs className='text-2xl'/>
                  </button>
                </div>
               <div>
               <button className='btn bg-[#9538E2] text-white rounded-4xl px-8 py-6 ml-8 lg:ml-0' onClick={purchased}>
               Purchase
              </button>
               </div>
              </div>
              </div>
              
          
          <dialog id="my_modal_1" className="modal flex justify-center items-center">
            <div className="modal-box text-center">
              <img src={group} alt="" srcset="" className='mx-auto my-4'/>
              <h3 className="font-bold text-lg">Payment Successfully</h3>
              <p className="py-2">Thanks for purchasing. <br />
              Total: ${totalprice}</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn w-96 mr-8 rounded-full" onClick={CloseModal}>Close</button>
                </form>
              </div>
            </div>
          </dialog>
              <div className='flex flex-col gap-6'>
              {
                products.map(items=> <Cartitem key={items.product_id} cartItemDelte={cartItemDelte} items={items}></Cartitem>)
              }
              </div>
            </TabPanel>
            
          )}
          {
            tabIndex === 1 && (<TabPanel className=''>
              <div>
              <h1 className='font-bold text-2xl'>WishList</h1>
              </div>
              <div className='flex flex-col gap-6'>
              {
                
                wish.map(items=> <Wishlist key={items.product_id} WishItemDelete={WishItemDelete} items={items} data={data}></Wishlist>)
                
              }
              
              </div>
            
              </TabPanel>
            
          )}
     
          </div>
          </Tabs>
         
  
     </>
  )
}

export default Dashboard
