import React,{useState} from 'react'
import './Category.css'
import { fetchProducts } from '../../Helpers/Producthelper';
import { Product } from '../Product/Product';
import {Carousel} from '../Carousel/Carousel';

export const Category = () => {

    const categories = {
        "bedroom":['bed','ooooo','jjjj','jjjjblkj'],
        "dining":['jjjjj','ppppppp'],
        "living":['pppppp','qqqqq']
    };
    const [category,setCategory] = useState()
    const [products,setProducts] = useState()
    const [subcategory,setSubcategory] = useState()

    const json = [
        {
            "id":"asdfgh",
            "name":"ddddd",
            "src":"https://static.wixstatic.com/media/c1a65e_58fb32c2fcc64cf6904d1f7f203d0d6d~mv2.jpg/v1/fill/w_625,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c1a65e_58fb32c2fcc64cf6904d1f7f203d0d6d~mv2.jpg",
            "dimensions":{
                "small":"hgsavk",
                "medium":"kjhabsokj",
                "large":"kjbcoklj"
            },
            "description":["asjhdvljahvdljhdc","asjhvdcojshvclskjcs","alsjhcvojhdcvsidc","a;sdukjcoiuss"],
        },
        {
            "id":"wejhb",
            "name":"ooooo",
            "src":"https://static.wixstatic.com/media/c1a65e_0213db45dbe54ef1a9bb1db12ecfb718~mv2.jpg/v1/fill/w_625,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c1a65e_0213db45dbe54ef1a9bb1db12ecfb718~mv2.jpg",
            "dimensions":{
                "small":"hgsavk",
                "medium":"kjhabsokj",
                "large":"kjbcoklj"
            },
            "description":["asjhdvljahvdljhdc","asjhvdcojshvclskjcs","alsjhcvojhdcvsidc","a;sdukjcoiuss"],
        },
        {
            "id":"asda;lsjfgh",
            "name":"llll",
            "src":"https://static.wixstatic.com/media/c1a65e_d260d923853c4c3db154162e67ba68ff~mv2.jpg/v1/fill/w_560,h_560,al_c,lg_1,q_80,enc_auto/c1a65e_d260d923853c4c3db154162e67ba68ff~mv2.jpg",
            "dimensions":{
                "small":"hgsavk",
                "medium":"kjhabsokj",
                "large":"kjbcoklj"
            },
            "description":["asjhdvljahvdljhdc","asjhvdcojshvclskjcs","alsjhcvojhdcvsidc","a;sdukjcoiuss"],
        },
    ]
    
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
                            onClick={()=> {
                                
                                /*setProducts(fetchProducts(subcategory))*/
                                setSubcategory(subItem)
                                setProducts(json)
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
                !products ? (<Carousel/>): (
                    <div className="product-menu">
                        {
                            products.map((product,index) => (
                                <Product product = {product} key={index}/>
                            ))
                        }       
                    </div>
                )
            }
        </div>
    )
}
