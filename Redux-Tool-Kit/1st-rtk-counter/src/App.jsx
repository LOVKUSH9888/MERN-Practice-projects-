import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setToZero } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const plusCounter = () => {
    const incrementBy = parseInt(prompt("Enter the value to increment by:")); // Prompt the user to enter the value
    if (!isNaN(incrementBy)) { // Check if the input is a valid number
      dispatch(increment(incrementBy)); // Dispatch the increment action with the entered value
    } else {
      alert("Please enter a valid number."); // Alert the user if the input is invalid
    }
  };

  const minusCounter = () => {
    dispatch(decrement());
  };

  const setToZeroCounter = () => {
    dispatch(setToZero());
  };

  return (
    <>
      <div className="container border mt-5 p-3">
        <div className="row d-flex justify-content-center text-center ">
          <div className="col ">
            <h1>Counter Web App</h1>
            <h2 className="text-primary">COUNTER : {count}</h2>
            <button className="btn btn-success mx-2" onClick={plusCounter}>
              Increment
            </button>
            <button className="btn btn-danger mx-2" onClick={minusCounter}>
              Decrement
            </button>
            <button className="btn btn-primary" onClick={setToZeroCounter}>
              setToZero
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
