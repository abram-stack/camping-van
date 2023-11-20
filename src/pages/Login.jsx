import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password:''
  })

  const location = useLocation()

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(loginFormData)
  }

  return (
    <>
      <div className='login-container container'>
        {location.state?.message && 
          <h3 className="login-message-danger">{location.state.message}
          </h3>
        }
        <h1>Sign in to your account</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Email address"
            name="email"
            value={loginFormData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={loginFormData.password}
            onChange={handleChange}
          />
          <button className="link-button">
            Log in
          </button>
        </form>
        <p>Dont have an account? <Link className="link-text">Create one now</Link></p>
      </div>
    </>
  );
}
