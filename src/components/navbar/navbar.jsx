import React, { useState } from "react";
import logo from "../Assets/main-logo.png";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
          <li
            className="nav-item"
            onClick={() => {
              setMenu("home");
            }}>
            Home {menu === "home" ? <hr /> : <></>}
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setMenu("about");
            }}>
            About{menu === "about" ? <hr /> : <></>}
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setMenu("contact");
            }}>
            Contact{menu === "contact" ? <hr /> : <></>}
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setMenu("shop");
            }}>
            Shop{menu === "shop" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <FontAwesomeIcon icon={faShoppingCart} />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
