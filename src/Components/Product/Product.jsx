import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"

export const Product = ({product,category,subcategory}) => {

  localStorage.setItem('id', product._id )
  localStorage.setItem('category', category )
  localStorage.setItem('subcategory', subcategory )

  return (
    <Link style={{textDecoration: 'none'}} to = {"/product/"+ product.product_name.replace(/\s|\//g, "-")} target='_blank' >
      <div className='product-item'>
        <img src={product.pictures} alt={`${product.product_name}`} />
        <p>{product.product_name}</p>
      </div>
    </Link>
  )
}
