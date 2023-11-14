import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
  const [vans, setVans] = useState([])

  // I think(later), it will depend on the host(which host). for now every render
  useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
   }, [])

  console.log(vans)
  return (
    <>
      <div className='host-vans-container'>
        <h1>Your listed vans</h1>
        <div className='host-vans'>
          {vans.map((van) => (
            <Link to={`/host/vans/${van.id}`} key={van.id}>
              <div className='host-vans-card'>
                <img src={van.imageUrl} className='host-vans-img' />
                <div className='host-vans-content'>
                  <h3>{van.name}</h3>
                  <p>{van.price}/day</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}