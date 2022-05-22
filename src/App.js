import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./pages/Auth/PrivateRoute";
import Signup from "./pages/Auth/Signup";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
