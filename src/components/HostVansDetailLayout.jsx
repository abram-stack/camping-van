import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { getHostVans } from '../api';

export default function HostVansDetailLayout() {
  const { id } = useParams();

  const [van, setVan] = useState({});
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVan(data.vans[0]));
  // }, []);

  useEffect(() => {
    async function loadVan(id) {
      setLoading(true)
      try {
        const data = await getHostVans(id)
        setVan(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    loadVan(id)
  },[])

  
  if (loading) return <h2>Loading van details...</h2>
  
  if (error) return <h2>Error occured: { error.message}</h2>
  return (
    <>
      <Link to='..' relative='path' className='back-button'>
        &larr; <span>Back to all vans</span>
      </Link>
      <div className='host-van-detail-container'>
        {van && (
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
              <NavLink
                to={``}
                end
                className={({ isActive }) => (isActive ? 'activeStyle' : '')}
              >
                Details
              </NavLink>
              <NavLink
                to={`price`}
                className={({ isActive }) => (isActive ? 'activeStyle' : '')}
              >
                Pricing
              </NavLink>
              <NavLink
                to={`photos`}
                className={({ isActive }) => (isActive ? 'activeStyle' : '')}
              >
                Photos
              </NavLink>
            </nav>

            <Outlet context={{ van }} />
          </div>
        )}
      </div>
    </>
  );
}
