import React from "react";
import SimpleForm from "./component/Form";

const App = () => {
  //Hooks
  const [task, setTask] = React.useState("");

  //Functions
  function addTask() {}
  return (
    <>
      <SimpleForm />
    </>
  );
};

export default App;
