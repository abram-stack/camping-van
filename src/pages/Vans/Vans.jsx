import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';


export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()
  
  const typeFilter = searchParams.get('type')
  console.log(typeFilter)

  useEffect(() => {
    fetch(`/api/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans

  const vansElements = displayedVans.map((van) => (
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
        ))
    
  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='filter-container'>
        <Link to='?type=simple' className='link-button'>Simple</Link>
        <Link to='?type=luxury' className='link-button'>Luxury</Link>
        <Link to='?type=rugged' className='link-button'>Rugged</Link>
        <Link to='.'className='link-button clear-filter'>Clear filters</Link>
      </div>
      <div className='van-list'>
        { vansElements}
      </div>
    </div>
  );
}
