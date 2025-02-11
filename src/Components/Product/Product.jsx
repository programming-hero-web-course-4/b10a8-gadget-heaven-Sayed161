import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';




const Product = ({product}) => {

    const {product_image,category,product_title,price,product_id}=product;
  return (
    <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img
      src={product_image}
      alt="Shoes" className='m-2 w-96'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p className="card-title text-[#09080F99]">Price: ${price}</p>
    <div className="card-actions">
    <Link className="btn btn-outline border border-[#9538E2] text-[#9538E2] rounded-2xl text-lg" to={`details/${product_id}`}>View Details</Link>
    </div>
  </div>
</div>
  )
}

Product.propTypes = {
    product: PropTypes.object
}

export default Product
