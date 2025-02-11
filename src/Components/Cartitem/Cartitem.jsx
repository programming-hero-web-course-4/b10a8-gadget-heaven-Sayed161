import { IoCloseCircleOutline } from "react-icons/io5";
const Cartitem = ({items,cartItemDelte}) => {
  const {product_title,description,price,product_image,product_id} = items;
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
    </div>
    <div className='justify-end text-3xl text-red-500 mr-4' onClick={()=>cartItemDelte(product_id)}>
    <IoCloseCircleOutline/>
    </div>
  </div>
  )
}

export default Cartitem
