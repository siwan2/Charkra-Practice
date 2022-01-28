import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyTranxPg from "./pages/my_tranx";
import LoginPg from "./pages/login";
import Home from "./pages/home.js";
import AllTranxPg from "./pages/all_tranx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<LoginPg />} />
        <Route path="/MyTranx" element={<MyTranxPg />} />
        <Route path="/AllTranx" element={<AllTranxPg />} />
      </Routes>
    </Router>
  );
}

export default App;
