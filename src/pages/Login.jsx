import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password:''
  })

  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  
  const location = useLocation()
  const navigate = useNavigate()
  const userFrom = location.state?.from || '/host'

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const data = await loginUser(loginFormData)
      setError(null)
      localStorage.setItem('isLoggedIn', true)
      navigate(userFrom, {replace:true})
    } catch (error) {
      setError(error)
      console.log(error)
    } finally {
      setStatus('idle')
    }
  }

  return (
    <>
      <div className='login-container container'>
        {location.state?.message && (
          <h3 className='login-message-danger'>{location.state.message}</h3>
        )}
        {error?.message && (
          <h3 className="login-message-danger">{error.message}</h3>
        )}
        <h1>Sign in to your account</h1>
        <form onSubmit={handleSubmit} className='login-form'>
          <input
            type='text'
            placeholder='Email address'
            name='email'
            value={loginFormData.email}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Password'
            name='password'
            value={loginFormData.password}
            onChange={handleChange}
          />
          <button className='link-button' disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Logging you in' : 'Log In'}
          </button>
        </form>
        <p>
          Dont have an account?{' '}
          <Link className='link-text'>Create one now</Link>
        </p>
      </div>
    </>
  );
}
