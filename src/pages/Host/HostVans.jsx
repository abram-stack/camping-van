import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"

export default function HostVans() {
  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getHostVans()
        setVans(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  },[])
  
  // loading && <h1>Loading vans...</h1>
  if (loading) {
    return <h2>loading...</h2>
  }

  if (error) {
    return <h2>error occured: {error.message}</h2>
  }
  return (
    <>
      <div className='host-vans-container'>
        <h1>Your listed vans</h1>
        <div className='host-vans'>
          {vans.map((van) => (
            <Link to={van.id} key={van.id}>
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