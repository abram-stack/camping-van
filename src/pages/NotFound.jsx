import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="container">
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to='/' className="link-button btn-full">Go back to Homepage</Link>
      </div>
    </>
  )
}