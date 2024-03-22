import { useEffect } from "react";
import { useState } from "react";

function UseState() {
  // Hooks
  const [person, setPerson] = useState({
    name: "Lovkush",
    age: 28,
    address: "Kolkata",
  });

  const randomAge = Math.floor(Math.random() * 100000);
  // Function
  const handleUpdate = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      age: randomAge,
    }));
  };

  // Return
  return (
    <>
      <h1>Object Properties:-</h1>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Address: {person.address}</h3>
      <button onClick={handleUpdate}>CHANGE</button>
    </>
  );
}

export default UseState;
