import React from "react";
import { useState } from "react";

const App = () => {
  //Hooks/variables
  const [counter, setCounter] = useState(0);

  //funcion definitions
  function handleIncriment() {
    // console.log("Incrimented");
    setCounter(counter + 1);
  }

  function handleDecriment() {
    // console.log("handleDecriment");
    setCounter(counter - 1);
  }

  //return
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={handleIncriment}>Incriment</button>
      
      <button onClick={handleDecriment}>Decrement</button>
    </>
  );
};

export default App;
