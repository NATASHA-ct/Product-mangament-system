import React from 'react'
import './list.css';

function Productlist() {
  return (
    <>
     <h2 className='listHd'>Product List</h2>

      <div className='listCont'>
        <div className='singleProd'>
          <input type="checkbox" name="" id="" className='delete-checkbox'/>
          <p className="sku">JVC200123</p>
          <p className="name">Acme DISC</p>
          <p className="price">$1.00</p>
          <p className="attributes">Size: 700 MB</p>
        </div>
      </div>
    </>
  );
}

export default Productlist
