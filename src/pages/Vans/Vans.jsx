import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch(`/api/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

    
  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='van-list'>
        {vans.map((van) => (
          <Link to={`/vans/${van.id}`} key={van.id}>
            <div className='van-card'>
              <img src={van.imageUrl} />
              <div className='van-info'>
                <p>{van.name}</p>
                <p>
                  {van.price}
                  <span>/day</span>
                </p>
              </div>
              <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
