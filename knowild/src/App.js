import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <Nav/>
      <Home/>
      <Footer/>
      <Routes>
        {/* <Route path="/" element={ </> }></Route> */}
      </Routes>
    </div>
  );
};

export default App;


//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     
//  STYLES   
//  SWEEP 