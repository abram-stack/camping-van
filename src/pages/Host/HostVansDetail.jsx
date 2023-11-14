import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function HostVansDetail() {
  const { id } = useParams()

  const [van, setVan] = useState({});

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, []);

  return (
    <>
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
      </div>{' '}
    </>
  );
}
