import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";


function Nav() {
    return (
      <div className="nav">
        <div className="logo-container">
          <Link to="/">
            <button id="header-btn"> knowild </button>
            <button>
              <img
                id="knowild-logo"
                src={logo}
                alt="knowild logo"
                style={{ height: "50px"}}
              />
            </button> 
          </Link>
        </div>
        <div className="links-container">
          <Link to="/Categories">
            <button className="nav-btn"> categories </button>
          </Link>          
          <Link to="/Locations">
            <button className="nav-btn"> locations </button>
          </Link>
          <Link to="/Basket">
            <button className="nav-btn" id="basket-btn"> my basket </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Nav;



//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   
//  SWEEP    
