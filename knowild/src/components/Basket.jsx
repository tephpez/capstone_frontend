import React from "react";
import { Link } from "react-router-dom";

import Client from "../services/api";


function Basket() {
  return (
    <div className="reset-basket">
      <div className="section-container basket" id="profile">
        <div className="profpic-card">
          <img src="" alt="profile pic"></img>
        </div>
        <div className="profile-info">
          <p id="category-title"> profile section </p>
        </div>
      </div>
      <div className="section-container basket" id="my-finds">
        <button className="category-button"> mushrooms </button>
        <button className="category-button"> flowers </button>
        <button className="category-button"> fruits </button>
        <button className="category-button"> roots </button>
        <button className="category-button"> leaves </button>
        <button className="category-button"> seeds </button>
      </div>
      <div className="section-container basket" id="my-map">
        <span id="park-title"> my map </span>
      </div>
    </div>

  );
}

export default Basket;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE
//  STYLES
//  SWEEP
