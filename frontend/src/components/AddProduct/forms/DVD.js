import React from "react";

function DVD(props) {
  return (
    <>
      <label htmlFor="">Size(MB)</label>
      <input type="text" id="size" onChange={props.handleChange} />
    </>
  );
}

export default DVD;
