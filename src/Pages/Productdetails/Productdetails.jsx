import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Imagedisplay } from '../../Components/Imagedisplay/Imagedisplay'
import "./Productdetails.css"
import { Dimensions } from '../../Components/Dimensions/Dimensions'
import { Description } from '../../Components/Description/Description'
import { fetchProduct } from '../../Helpers/Producthelper'

export const Productdetails = () => {

  const [product,setProduct] = useState();

  const id = localStorage.getItem('id')
  const category = localStorage.getItem('category')
  const subcategory = localStorage.getItem('subcategory')

  useEffect( () => {

    fetchProduct(category,subcategory,id).then((res) => {
      setProduct(res)
    })

  },[category,subcategory,id])

  return (
    <div className='product-details'>
      <Navbar/>
      { product ? (
        <>
          <p className='product-name'>{product.product_name}</p>
          <div className='image-dimensions-description'>
            <Imagedisplay images = {product.pictures}/>
            <div className='dimension-description'>
              {product.dimensions? <Dimensions dimensions = {product.dimensions}/> : <p></p>}
              {product.description? <Description descriptions = {product.description}/>:<p>nothing</p>}
            </div>
          </div>
        </>
      ) : (
        <p>loading product details</p>
      )
      }
      
    </div>
  )
}
