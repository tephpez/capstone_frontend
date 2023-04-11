import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Nav() {
  return (
    <div id="nav">
      <Link to="/">
        <div id="logo-container">
          <span id="header-btn"> knowild </span>
          <img id="knowild-logo" src={logo} alt="knowild logo" />
        </div>
      </Link>
      <div id="links-container">
        <Link to="/Categories">
          <button className="app-btn"> all finds </button>
        </Link>
        <Link to="/Locations">
          <button className="app-btn"> locations </button>
        </Link>
        <Link to="/Basket">
          <button className="app-btn" id="basket-btn"> my basket </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP
