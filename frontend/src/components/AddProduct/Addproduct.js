import React, { useState , useRef} from 'react'
import './add.css';
import { Link } from 'react-router-dom';
import Book from './forms/Book';
import Furniture from './forms/Furniture';
import DVD from './forms/DVD';


function Addproduct() {
  const [inputs, setInputs] = useState({
    
  });
  const formRef = useRef();


  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };

   const handleSubmit = (e) => {
     e.preventDefault();
     formRef.current.submit();
     console.log(inputs);
   };

  
  return (
    <>
      <div className="addHeader">
        <h2 className="addHd">Product Add</h2>

        <Link to="/" className="addBtns">
          <button className="saveBtn" onClick={() => formRef.current.submit()}>
            Save
          </button>

          <button className="cancelBtn">Cancel</button>
        </Link>
      </div>

      <div>
        <form action="" id="product_form" onSubmit={handleSubmit} ref={formRef}>
          <div className="partA">
            <label htmlFor="">SKU</label>
            <input type="text" id="sku" onSubmit={handleChange} />

            <br></br>

            <label htmlFor="">Name</label>
            <input type="text" id="name" onSubmit={handleChange} />

            <br></br>

            <label htmlFor="">Price ($)</label>
            <input type="text" id="price" onSubmit={handleChange} />
          </div>

          <div className="partB">
            <label htmlFor="">Type Switcher </label>
            <select id="productType" onSubmit={handleChange}>
              <option disabled selected>Type Switcher</option>
              <option value="book" id="Book">
                Book
              </option>
              <option value="DVD" id="DVD">
                DVD
              </option>
              <option value="Furniture" id="Furniture">
                Furniture
              </option>
            </select>
          </div>

          <div className="partC">
            <Book handleChange={handleChange} />
            <Furniture handleChange={handleChange} />
            <DVD handleChange={handleChange} />
          </div>
        </form>
      </div>
    </>
  );
}



export default Addproduct

