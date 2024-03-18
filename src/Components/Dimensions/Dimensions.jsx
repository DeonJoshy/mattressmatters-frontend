import "./Dimensions.css"

export const Dimensions = ({dimensions}) => {
  return (
    <div className="dimensions">
        <p className="dimension-heading">Dimensions</p>
        <ul className="dimensions-list">
        {Object.entries(dimensions).map(([key,value],index) => (
            <li className="dimension-item" key={index}><p>{key}{` : `}{value}</p></li>
        ))}
        </ul>
    </div>
  )
}
