import React from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Imagedisplay } from '../../Components/Imagedisplay/Imagedisplay'
import "./Productdetails.css"
import { Dimensions } from '../../Components/Dimensions/Dimensions'
import { Description } from '../../Components/Description/Description'

export const Productdetails = () => {

  const {id} = useParams()
  console.log(id)
  const json = 
    {
        "id":"asdfgh",
        "name":"ddddd",
        "images":["https://static.wixstatic.com/media/c1a65e_58fb32c2fcc64cf6904d1f7f203d0d6d~mv2.jpg/v1/fill/w_625,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c1a65e_58fb32c2fcc64cf6904d1f7f203d0d6d~mv2.jpg","https://static.wixstatic.com/media/c1a65e_0213db45dbe54ef1a9bb1db12ecfb718~mv2.jpg/v1/fill/w_625,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c1a65e_0213db45dbe54ef1a9bb1db12ecfb718~mv2.jpg","https://static.wixstatic.com/media/c1a65e_d260d923853c4c3db154162e67ba68ff~mv2.jpg/v1/fill/w_560,h_560,al_c,lg_1,q_80,enc_auto/c1a65e_d260d923853c4c3db154162e67ba68ff~mv2.jpg"],
        "dimensions":{
            "small":"hgsavk",
            "medium":"kjhabsokj",
            "large":"kjbcoklj"
        },
        "description":["asjhdvljahvdljhdc","asjhvdcojshvclskjcs","alsjhcvojhdcvsidc","a;sdukjcoiuss"],
    }


// console.log(json["images"])

  return (
    <div className='product-details'>
      <Navbar/>
      <p className='product-name'>{json.name}</p>
        <div className='image-dimensions-description'>
          <Imagedisplay images = {json.images}/>
          <div className='dimension-description'>
            {json.dimensions? <Dimensions dimensions = {json.dimensions}/> : <p>nothing</p>}
            {json.description? <Description descriptions = {json.description}/>:<p>nothing</p>}
          </div>
        </div>
    </div>
  )
}
