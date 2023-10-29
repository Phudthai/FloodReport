import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import MainSc from "./components/MainSc"
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <MainSc/>
    </div>
  );
}

export default App;
