import { useState } from "react"
import "./Imagedisplay.css"
export const Imagedisplay = ({images}) => {
    const [enlarged,setEnlarged] = useState(images[0])
  return (
    <div className="imagedisplay-with-icons">
        <img src = {enlarged} alt="enlarged"/>
        <ul className="image-menu">
        {
            images.map((image,index) => (
                <li className="image-icon" key={index}><img src={image} alt={index} onClick={() => setEnlarged(image)} /></li>
            ))
        }
        </ul>
    </div>
  )
}
