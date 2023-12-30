import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
