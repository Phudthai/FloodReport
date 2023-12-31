import React from "react";
import './App.css';
// import AdminNavbar from "./components/AdminNavbar";
import SignIn from "./Pages/user/SignIn";
import SignUp from "./Pages/user/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/user/MainSc";
import FormPost from "./Pages/user/FormPost";
import MainAdmin from "./Pages/admin/MainScAdmin";
import SinglePost from "./components/user/SinglePost";
import Donate from "./Pages/user/Donate";
import Footer from "./components/user/Footer";
import Navbar from "./components/user/Navbar";
function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="formpost" element={<FormPost />} />
        <Route path='donate' element={<Donate />} />
        <Route path="admin" element={<MainAdmin />} />
        <Route path="post/:slug" element={<SinglePost/>}/>
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;