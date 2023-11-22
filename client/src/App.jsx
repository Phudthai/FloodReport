import React from "react";
import './App.css';
// import AdminNavbar from "./components/AdminNavbar";
import SignIn from "./Pages/user/SignIn";
import SignUp from "./Pages/user/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/user/MainSc";
import FormPost from "./Pages/user/FormPost";
import ChatPage from "./Pages/user/ChatPage";
import MainAdmin from "./Pages/admin/MainScAdmin";
import SinglePost from "./components/user/SinglePost";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="chats" element={<ChatPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="formpost" element={<FormPost />} />
        <Route path="admin" element={<MainAdmin />} />
        <Route path="post/:slug" element={<SinglePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;