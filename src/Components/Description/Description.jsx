import "./Description.css"

export const Description = ({descriptions}) => {
  return (
    <div className="description">
        <p className="description-heading">Descriptions</p>
        <ul className="description-items">
            {descriptions.map((description,index) => (
                <li key={index} className="description-item">{description}</li>
            ))}
        </ul>
    </div>
  )
}
