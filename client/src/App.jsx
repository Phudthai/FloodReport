import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/MainSc";
import Footer from "./components/Footer";

function App() {
  
  return (
    <>
      <Navbar  />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Main />} />
          
          </Route>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;