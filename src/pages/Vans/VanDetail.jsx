import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { getVans } from "../../api"

export default function VanDetail() {
  const [van, setVan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const { id} = useParams()
  const location = useLocation()

  // we rely on some external data(depends on /:id), rerun effect if param changed
  // useEffect(() => {
  //   fetch(`/api/vans/${id}`)
  //     .then(res => res.json())
  //     .then(data=> setVan(data.vans))
  // }, [id])

  useEffect(() => {
    async function loadVans(id) { 
      try {
        const data = await getVans(id)
        setLoading(true)
        setVan(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans(id)
  }, [id])
  
  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>There is an error: {error.message}</h2>
  }

  return (
    <>
      <Link to={ location.state?.search ? `..?${location.state.search}` : '..'} relative='path' className='back-button container'>
        &larr; <span>Back to { location.state.type} vans</span>
      </Link>
      <div className='van-detail-container'>
        { van && <div className='van-detail'>
            <img src={van.imageUrl} />
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h2 className='van-title'>{van.name}</h2>
            <h3>
              ${van.price}
              <span className='day'>/day</span>
            </h3>
            <p>{van.description}</p>
            <Link to='/renting' className='link-button link-button-bg'>
              Rent this van
            </Link> 
          </div>}
      </div>
    </>
  );
}