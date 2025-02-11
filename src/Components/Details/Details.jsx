import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
const Details = () => {
    const data = useLoaderData();
    const id = useParams();
    const item = data.find(product => product.product_id === parseInt(id.productId));
    const {product_image,product_title,price,availability,description,Specification,rating,product_id}= item;
    const stars = [];
    for(let i=1;i<6;i++)
    {
        if(Math.floor(rating)>=i){

            stars.push(<FaStar className='text-yellow-300' key={i}/>);
        }
        else{
            stars.push(<FaRegStar key={i}/>);
        }
    }
const addToCart = (productid) => {
      let cart = JSON.parse(localStorage.getItem('products'))||[];
      if(!cart.includes(productid))
      {
        const item = data.find(product => product.product_id ===productid);
        if(item.availability==="In stock"){
          cart.push(productid);
          toast.success("Product added successfully")
        }
        else{
          toast.error("Product is out of stock");
        }
        
      }
      else{
        toast.warning("Already added to the cart");
      }
        localStorage.setItem('products',JSON.stringify(cart));

    }
const addToWishlist = (productid) => {
      let wish = JSON.parse(localStorage.getItem('list'))||[];
      if(!wish.includes(productid))
      {
        wish.push(productid);
          toast.success("Product added to Wishlist!!")
      }
        localStorage.setItem('list',JSON.stringify(wish));
        console.log("Clicked");
    }
  return (

    <div className="hero relative bg-[#9538E2] text-white flex flex-col pb-96 lg:pb-72">
        <div className="max-w-5xl space-y-2 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mt-12">Product Details</h1>
          <p className="py-4 lg:max-w-3xl mx-auto">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
        </div>
    <div className="hero-content w-full text-black flex-col lg:flex-row justify-around items-center bg-white absolute top-52 rounded-2xl">
      <img
        src={product_image}
        class="w-96 rounded-lg shadow-2xl" />
      <div className='space-y-4'>
        <h1 className="text-3xl font-bold">{product_title}</h1>
        <h1 className="text-xl font-bold">Price : ${price}</h1>
        <h1 className={`${availability === 'In stock' ? 'btn btn-outline btn-success bg-green-100':'btn btn-outline btn-error bg-red-100'} rounded-2xl`}>{availability}</h1>
        <p className="text-[#09080F99]">
          {description}
        </p>
        <h1 className="font-bold">Specifications</h1>
        {
            Specification.map((spec, index) => (
              <div key={index}>
                <h1 className="text-[#09080F99]">{index+1}. {spec}</h1>
               
              </div>
            ))
        }
        <h1 className="font-bold">Rating</h1>
       
       <div className='flex items-center text-2xl gap-2'>
       {stars} <button className='btn btn-ghost rounded-full bg-gray-300'>{rating}</button>
       </div>
        <div className='flex gap-6 items-center'>
        <button className="btn bg-[#9538E2] rounded-4xl text-white font-bold text-sm px-6 py-6 z-10" onClick={()=>addToCart(product_id)} >Add To Card <RiShoppingCart2Line className='text-lg'/></button>
        <button className="btn btn-ghost rounded-full border border-gray-400" onClick={()=>addToWishlist(product_id)}><FaRegHeart/></button>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default Details
