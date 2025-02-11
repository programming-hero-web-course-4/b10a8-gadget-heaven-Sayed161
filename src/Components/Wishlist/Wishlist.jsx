import {  toast } from 'react-toastify';
import { IoCloseCircleOutline } from "react-icons/io5";
const Wishlist = ({items,data,WishItemDelete}) => {
  const {product_title,description,price,product_image,product_id} = items;
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
  return (
      <div className="card card-side bg-gray-50 shadow-sm items-center">
      <figure>
        <img
          src={product_image}
          alt="Movie" className='w-52'/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>{description}</p>
        <p className="">Pirce: {price}</p>
        <div>
        <button className="btn bg-[#9538E2] text-white rounded-4xl px-8 py-5 text-sm" onClick={()=>addToCart(product_id)}>Add to Cart</button>
        </div>
      </div>
      <div className='justify-end text-3xl text-red-500 mr-4' onClick={()=>WishItemDelete(product_id)}>
      <IoCloseCircleOutline/>
      </div>
     
    </div>
    )
}

export default Wishlist
