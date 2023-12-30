import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, setToZero } from "./store/counterSlice";

function App() {
  // Hooks
  const count = useSelector((state) => {
    return state.counter.value;
  });

  const dispatch = useDispatch();

  //Function
  const plusCounter = () => {
    // console.log("plusCounter");
    dispatch(increment());
  };

  const minusCounter = () => {
    // console.log("minus");
    dispatch(decrement());
  };

  const setToZeroCounter = () => {
    dispatch(setToZero());
  };

  //Return
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
