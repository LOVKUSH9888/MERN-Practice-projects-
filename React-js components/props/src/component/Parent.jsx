import React from "react";
import Child from "./Child";

const Parent = () => {
  const message = "Hello from Parent - ";

  //Passing Value
  const name = "Lovkush";
  return (
    <>
      {message}
      <Child name = {name}/>
    </>
  );
};

export default Parent;
