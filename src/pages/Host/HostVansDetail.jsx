import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"


export default function HostVansDetail() {
  const { id} = useParams()

  const [van, setVan] = useState({})
  // console.log(id)
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans[0]))
  }, [])
  console.log(van)

  return (
    <>
      <div className='host-van-detail-container'>
        <div className='host-van-detail'>
          <div className='host-van-detail-highlight'>
            <img src={van.imageUrl} />
            <div className='host-van-detail-info'>
              <i className={`van-type van-type-${van.type}`}>{van.type}</i>
              <h2>{van.name}</h2>
              <p>
                <span className='bold'>${van.price}</span>/day
              </p>
            </div>
          </div>
          <nav className='host-nav'>
            <NavLink>Details</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Photos</NavLink>
          </nav>
          <div className='host-van-detail-content'>
            <p>
              <span className='bold'>Name:</span> {van.name}
            </p>
            <p>
              <span className='bold'>Category:</span> {van.type}
            </p>
            <p>
              <span className='bold'>Description:</span> {van.description}
            </p>
            <p>
              <span className='bold'>Visibility:</span> Public
            </p>
          </div>
        </div>
      </div>
    </>
  );
}