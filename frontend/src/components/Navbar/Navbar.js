import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css';


function Navbar(props) {
  return (
    <nav className="nav">
      <Link to="/add-product">
        <button>ADD</button>
      </Link>

      <button
        disabled={selectedProducts.length === 0}
        onClick={handleMassDelete}
      >
        MASS DELETE
      </button>
    </nav>
  );
}

export default Navbar
