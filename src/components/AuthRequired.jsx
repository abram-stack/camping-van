import { Navigate, Outlet,useLocation } from "react-router-dom"

export default function AuthRequired() {

  const auth = localStorage.getItem('isLoggedIn')
  const location = useLocation()

  console.log(location)

  if (!auth) {
    return <Navigate
      to='/login'
      state={
        {
          message: 'you must log in first',
          from: location
        }
      } />
  }

  return <Outlet/>
}