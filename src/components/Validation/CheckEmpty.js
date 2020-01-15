import React from "react";

const CheckEmpty = props => {
  let message = "";
  if (props.itemLength.length === 0) {
    message = "Please enter item to buy";
  }

  return (
    <>
      <div style={{ color: "red" }}>
        <p>{message}</p>
      </div>
    </>
  );
};

export default CheckEmpty;
