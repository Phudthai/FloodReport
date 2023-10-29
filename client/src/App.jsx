import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./Pages/MainSc";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
    <Footer />
      <BrowserRouter>
				<Routes>
					<Route path="signin" element={<SignIn />} />
					<Route path="signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
    </>
  );
}

export default App;