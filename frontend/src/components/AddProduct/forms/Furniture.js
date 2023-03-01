import React from 'react'

function Furniture() {
  return (
    <div>
      <label htmlFor="">Height (CM)</label>
      <input type="text" id="height" />

      <br />

      <label htmlFor="">Width (CM)</label>
      <input type="text" id="width" />

      <br />

      <label htmlFor="">Length (CM)</label>
      <input type="text" id="length" />
    </div>
  );
}

export default Furniture
