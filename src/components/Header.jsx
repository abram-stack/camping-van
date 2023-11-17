import { Link, NavLink } from "react-router-dom";
import userLogo  from '../assets/images/user-circle.png'
export default function Header() {

  return (
    <header>
      <Link className='site-logo' to='/'>
        #Vanlife
      </Link>
      <nav>
        <NavLink
          to='/host'
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
        >
          Host
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
        >
          About
        </NavLink>
        <NavLink
          to='/vans'
          className={({ isActive }) => (isActive ? 'activeStyle' : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to='/login'
        >
          <img src={userLogo} className="user-logo"/>
        </NavLink>
      </nav>
    </header>
  );
}