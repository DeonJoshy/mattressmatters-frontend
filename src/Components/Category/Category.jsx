import React,{useState} from 'react'
import './Category.css'
import { fetchProducts } from '../../Helpers/Producthelper';
import { Product } from '../Product/Product';
import { Imageslider } from '../Imageslider/Imageslider';

export const Category = () => {

    const categories = {
        "Bedroom":['Beds','Bunk Beds','Bedroom Sets','Night Stands','Mattresses','Folding Beds','Trundle Beds','Headboards','Bed Frames','Platforms','Electric beds'],
        "Dining":['Dinettes','Bar & Pub Sets','Bar Stools','Chairs'],
        "Living":['Sofa Beds','Recliner & Lift Chairs','Sectionals','Sofa Stationary','Sofa Recliners','Futons','Accent Chairs','Coffee Tables & Side Tables','Benches & Ottomans']
    };
    const [category,setCategory] = useState()
    const [products,setProducts] = useState()
    const [subcategory,setSubcategory] = useState()
    
    return(
        <div>
            <ul className="category-menu">
                {Object.keys(categories).map((item,index) => (
                            <li onClick={() => setCategory(item)} key={index}>{item} {category === item? <hr/>:<></>}</li>
                ))}
            </ul>
            <div className='subcategory-menu'>
                {
                    category && categories[category].map((subItem,index) => (
                            <div className='subcategory-item' key={index} 
                            onClick={async ()=> {
                                setSubcategory(subItem)
                                setProducts(await fetchProducts(category,subItem))
                                // setProducts(json)
                            }
                            }
                            >
                                {subItem}
                                {subcategory === subItem? <hr/>:<></>}
                            </div>   
                    ))
                }
            </div>
            {
                !products ? (<Imageslider/>): (
                    <div className="product-menu">
                        {
                            products.map((product,index) => (
                                <Product product = {product} key={index} category = {category} subcategory = {subcategory}/>
                            ))
                        }       
                    </div>
                )
            }
        </div>
    )
}
