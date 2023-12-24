import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import ReadPost from "./components/ReadPost";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ReadPost/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
        <Route path="/editpost" element={<EditPost/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
