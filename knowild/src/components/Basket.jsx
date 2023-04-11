import React from "react";
import { Link } from "react-router-dom";


function Basket() {
    return (
      <div className="basket-page">
        <div id="component-format">

          <div id="content-container">
            <div className="profile-container">
              <span>THIS IS BASKET PAGE</span>
            </div>
          </div>

          <div id="sidebar-container">
            <Link to="/AddFind">
              <button className="app-btn" id="add-btn"> add find </button>
            </Link>
            <Link to="/AddPark">
              <button className="app-btn" id="add-btn"> add park </button>
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



