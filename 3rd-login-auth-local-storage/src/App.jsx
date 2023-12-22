import "./App.css";
import Dashboard from "./Components/Dashboard";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Error from "./Components/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
