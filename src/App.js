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
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import AddReview from "./pages/Dashboard/AddReview";
import Profile from "./pages/Dashboard/Profile";
import AdminRoute from "./pages/Auth/AdminRoute";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import AddProduct from "./pages/Dashboard/AddProduct";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageProduct from "./pages/Dashboard/ManageProduct";
import PurchasePage from "./pages/Home/PurchasePage";
import Payments from "./pages/Dashboard/Payments";
import EditProfile from "./pages/Dashboard/EditProfile";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoute />}>
          <Route path="/parts/:id" element={<PurchasePage />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="myorders" element={<MyOrders />} />
            <Route path="payment/:id" element={<Payments />} />
            <Route path="addreview" element={<AddReview />} />
            <Route path="profile" element={<Profile />} />
            <Route path="editprofile/:id" element={<EditProfile />} />
            <Route elemen={<AdminRoute />}>
              <Route path="manageorders" element={<ManageOrders />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="admin" element={<MakeAdmin />} />
              <Route path="manageproduct" element={<ManageProduct />} />
            </Route>
          </Route>
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
