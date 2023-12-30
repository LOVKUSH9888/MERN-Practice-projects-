import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./store/counterSlice";

function App() {
  // Hooks
  const count = useSelector((state)=> {
    return state.counter.value;
  })

  const dispatch = useDispatch();

  //Function
  const plusCounter = ()=> {
    // console.log("plusCounter");
    dispatch(increment())
  }

  const minusCounter = ()=> {
    // console.log("minus");
    dispatch(decrement())
  }


  //Return
  return (
    <>
      <div className="container border mt-5 p-3">
        <div className="row d-flex justify-content-center text-center ">
          <div className="col ">
            <h1>Counter Web App</h1>
            <h2 className="color danger">COUNTER : {count}</h2>
            <button className="btn btn-success mx-2" onClick={plusCounter}>Increment</button>
            <button className="btn btn-danger" onClick={minusCounter}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
