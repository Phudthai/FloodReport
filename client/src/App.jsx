import React from "react";
import './App.css';
// import AdminNavbar from "./components/AdminNavbar";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/MainSc";
import FormPost from "./Pages/FormPost";
import ChatPage from "./Pages/ChatPage";

function App() {
  
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="chats" element={<ChatPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="formpost" element={<FormPost />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;