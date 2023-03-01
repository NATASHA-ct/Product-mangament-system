import React from 'react'
import './add.css';
import { Link } from 'react-router-dom';
import Book from './forms/Book';
import Furniture from './forms/Furniture';
import DVD from './forms/DVD';


function Addproduct() {
  return (
    <>
      <div className="addHeader">
        <h2 className="addHd">Product Add</h2>

        <Link to="/" className="addBtns">
          <button className="saveBtn">Save</button>

          <button className="cancelBtn">Cancel</button>
        </Link>
      </div>

      <div>
        <form action="" id="product_form">
          <div className="partA">
            <label htmlFor="">SKU</label>
            <input type="text" id="sku" />

            <br></br>

            <label htmlFor="">Name</label>
            <input type="text" id="name" />

            <br></br>

            <label htmlFor="">Price ($)</label>
            <input type="text" id="price" />
          </div>

          <div className="partB">
            <label htmlFor="">Type Switcher </label>
            <select id="productType">
              <option selected>Type Switcher</option>
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
            <Book />
            <Furniture />
            <DVD />
          </div>
        </form>
      </div>
    </>
  );
}



export default Addproduct

