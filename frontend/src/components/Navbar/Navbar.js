import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css';


function Navbar() {
  return (
    <nav className="nav">
      <Link to="/add-product">
        <button>ADD</button>
      </Link>

      <button>MASS DELETE</button>
    </nav>
  );
}

export default Navbar
