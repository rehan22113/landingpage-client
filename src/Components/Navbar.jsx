import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link to="/privacy-policy" className="mr-5 hover:text-gray-900">Privacy Policy</Link>
      <Link to="/termandcondition" className="mr-5 hover:text-gray-900">Term and Condition</Link>
    </nav>
    
  </div>
</header>

  )
}

export default Navbar