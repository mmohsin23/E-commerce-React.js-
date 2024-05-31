import React, { useState } from "react";
import "../../Assets/Scss/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-logo">
          <Link to="/">
            <img
              src="/Assets/Images/main-logo.png"
              alt=""
              onClick={() => {
                setMenu("home");
              }}
            />
          </Link>
        </div>
        <ul className="nav-menu">
          <li 
            className="nav-item"
            onClick={() => {
              setMenu("home");
            }}
          >
            <Link to="/">Home</Link>
            {menu === "home" ? <hr /> : <></>}
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/shop">Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setMenu("about");
            }}
          >
            <Link to="/about">About</Link>
            {menu === "about" ? <hr /> : <></>}
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setMenu("contact");
            }}
          >
            <Link to="/contact">Contact</Link>
            {menu === "contact" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'>
            <button onClick={() => {
              setMenu("loginButton");
            }}> Login {menu==='loginButton'?<></>:<></>} </button>
          </Link>
          <Link to='/cart'>
          <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
