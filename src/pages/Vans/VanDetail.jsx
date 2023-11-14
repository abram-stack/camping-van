import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function VanDetail() {
  const param = useParams()
  const [van, setVan] = useState(null)

  // we rely on some external data(depends on /:id), rerun effect if param changed
  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then(res => res.json())
      .then(data=> setVan(data.vans))
  }, [param])
  
  return (
    <div className='van-detail-container'>
      {van ? (
        <div className='van-detail'>
          <img src={van.imageUrl} />
          <i className={`van-type van-type-${van.type}`}>{van.type}</i>
          <h2 className="van-title">{van.name}</h2>
          <h3>${van.price}<span className="day">/day</span></h3>
          <p>{van.description}</p>
          <Link to='/renting' className="link-button link-button-bg">Rent this van</Link>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}