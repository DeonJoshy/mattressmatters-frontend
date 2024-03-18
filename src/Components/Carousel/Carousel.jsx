import React from 'react'
import './Carousel.css'

export const Carousel = () => {
    
    const slides = [
        { url: "https://static.wixstatic.com/media/c1a65e_58fb32c2fcc64cf6904d1f7f203d0d6d~mv2.jpg/v1/fill/w_625,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c1a65e_58fb32c2fcc64cf6904d1f7f203d0d6d~mv2.jpg", title: "chair" },
        { url: "https://static.wixstatic.com/media/c1a65e_0213db45dbe54ef1a9bb1db12ecfb718~mv2.jpg/v1/fill/w_625,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c1a65e_0213db45dbe54ef1a9bb1db12ecfb718~mv2.jpg", title: "bed" },
        { url: "https://static.wixstatic.com/media/c1a65e_d260d923853c4c3db154162e67ba68ff~mv2.jpg/v1/fill/w_560,h_560,al_c,lg_1,q_80,enc_auto/c1a65e_d260d923853c4c3db154162e67ba68ff~mv2.jpg", title: "nightstand" },
        { url: "https://static.wixstatic.com/media/c1a65e_56dc65f8d59c43f8a2d8e8005927adf8~mv2.jpg/v1/fill/w_625,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c1a65e_56dc65f8d59c43f8a2d8e8005927adf8~mv2.jpg", title: "headboard" },
        { url: "https://static.wixstatic.com/media/c1a65e_86c31459c8df4912ae3aa44b47167ed5~mv2.jpg/v1/fill/w_625,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c1a65e_86c31459c8df4912ae3aa44b47167ed5~mv2.jpg", title: "bedroomset" },
    ];
    
  return (
        <marquee scrollamount = '20' scrolldelay='5'>
            <div className='carousel'>
                {slides.map((image,index)=>(
                    <img src={image.url} alt={image.title} key={index}/>
                ))}
            </div>
        </marquee>
  )
}


