import React from 'react'

function Furniture(props) {
  return (
    <>
      <label htmlFor="">Height (CM)</label>
      <input type="text" id="height" />

      <br />

      <label htmlFor="">Width (CM)</label>
      <input type="text" id="width" onChange={props.handleChange} />

      <br />

      <label htmlFor="">Length (CM)</label>
      <input type="text" id="length" />
    </>
  );
}

export default Furniture
