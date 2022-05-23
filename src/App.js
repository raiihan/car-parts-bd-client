import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./pages/Auth/PrivateRoute";
import Signup from "./pages/Auth/Signup";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import NewsLetter from "./pages/Home/NewsLetter";
import Navbar from "./pages/Shared/Navbar";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FitForMe from "./pages/Home/FitForMe";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/fitforme" element={<FitForMe />} />
        </Route>
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
