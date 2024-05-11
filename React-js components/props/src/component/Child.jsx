import React from "react";

const child = (props) => {
  ////With logical printing
  //Creating an empty array
  const repeatedNames = [];

  const repeatCount = 5;

  for (let i = 0; i < repeatCount; i++) {
    repeatedNames.push(<h1>{props.name}</h1>);
  }
  return (
    <>
      {/* <h1>{props.name}</h1>
      <h1>{props.name}</h1>
      <h1>{props.name}</h1>
      <h1>{props.name}</h1>
      <h1>{props.name}</h1> */}
      {/* With Logical Printing */}
      {repeatedNames}
    </>
  );
};

export default child;
