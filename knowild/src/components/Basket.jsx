import React from "react";
import { Link } from "react-router-dom";


function Basket() {
    return (
      <div className="basket-page">
        <div id="page-format">

          <div id="content-container">
            <div className="profile-container">
              <span>THIS IS BASKET PAGE</span>
            </div>
          </div>

          <div id="sidebar-container">
            <Link to="/AddFind">
              <button className="nav-btn" id="addfind-btn"> add find </button>
            </Link>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Basket;


  
//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     
//  STYLES   
//  SWEEP    



