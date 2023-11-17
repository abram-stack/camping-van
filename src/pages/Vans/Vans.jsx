import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const typeFilter = searchParams.get('type');

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err)      
      } finally {
        setLoading(false);  
      }
    }
    loadVans()
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vansElements = displayedVans?.map((van) => (
    <Link
      to={van.id}
      key={van.id}
      state={{ search: searchParams.toString(), type: typeFilter }}
    >
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
  ));

  if (loading) {
    return <h1>Loading vans...</h1>
  }

  if (error) {
    return <h1>Error has occurred: {error.message}</h1>
  }
  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='filter-container'>
        <button
          onClick={() => setSearchParams({ type: 'simple' })}
          className={`link-button simple ${
            typeFilter === 'simple' ? 'selected' : ''
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: 'luxury' })}
          className={`link-button luxury ${
            typeFilter === 'luxury' ? 'selected' : ''
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: 'rugged' })}
          className={`link-button rugged ${
            typeFilter === 'rugged' ? 'selected' : ''
          }`}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className='link-button clear-filter'
          >
            Clear filters
          </button>
        ) : null}

        {/* <Link to='?type=simple' className='link-button'>Simple</Link>
        <Link to='?type=luxury' className='link-button'>Luxury</Link>
        <Link to='?type=rugged' className='link-button'>Rugged</Link>
        <Link to='.'className='link-button clear-filter'>Clear filters</Link> */}
      </div>
      <div className='van-list'>{vansElements}</div>
    </div>
  );
}
