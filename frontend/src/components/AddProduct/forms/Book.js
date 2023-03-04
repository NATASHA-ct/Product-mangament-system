import React from 'react'

function Book(props) {
  return (
    <>
      <label htmlFor="">Weight (KG)</label>
      <input type="text" id="weight" onChange={props.handleChange} />
    </>
  );
}

export default Book
