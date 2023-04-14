import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Nav() {
  return (
    <div id="nav">
      <Link to="/all-finds">
        <button className="app-btn"> all finds </button>
      </Link>
      <Link to="/locations">
        <button className="app-btn"> locations </button>
      </Link>
      <Link to="/my-basket">
        <button className="app-btn" id="basket-btn"> my basket </button>
      </Link>
    </div>
  );
}

export default Nav;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP
{/* <Link to="/Basket">
<button className="app-btn" style={{ backgroundColor: "#909194" }}>
  {" "}
  register{" "}
</button>
</Link> */}