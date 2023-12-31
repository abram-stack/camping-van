import { Link, NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <div className="container">
      <nav className='host-nav'>
        <NavLink
          to='/host'
          end
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='income'
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
        >
          Income
        </NavLink>
        <NavLink
          to='vans'
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to='reviews'
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}