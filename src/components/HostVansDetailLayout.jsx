import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function HostVansDetailLayout() {
  const { id } = useParams();

  const [van, setVan] = useState({});
  // console.log(id)
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, []);
  console.log(van);

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
            <NavLink
              to={`/host/vans/${van.id}`}
              end
              className={({ isActive }) => (isActive ? 'activeStyle' : '')}
            >
              Details
            </NavLink>
            <NavLink
              to={`/host/vans/${van.id}/price`}
              className={({ isActive }) => (isActive ? 'activeStyle' : '')}
            >
              Pricing
            </NavLink>
            <NavLink
              to={`/host/vans/${van.id}/photos`}
              className={({ isActive }) => (isActive ? 'activeStyle' : '')}
            >
              Photos
            </NavLink>
          </nav>

          <Outlet />
        </div>
      </div>
    </>
  );
}
