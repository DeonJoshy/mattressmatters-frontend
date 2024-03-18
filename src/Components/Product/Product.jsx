import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"

export const Product = ({product}) => {
  return (
    <Link style={{textDecoration: 'none'}} to = {"/product/"+product.id} target='_blank' >
      <div className='product-item'>
        <img src={product.src} alt={`${product.name}`} />
        <p>{product.name}</p>
      </div>
    </Link>
  )
}
