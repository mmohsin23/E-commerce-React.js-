import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsScrolled(scroll >= 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menu, setMenu] = useState("home");

  return (
    <div className={`navbar mainHeader ${isScrolled ? "fixed" : ""}`}>
      <div className="container">
        <div className="nav-logo">
          <Link to="/" onClick={() => setMenu("home")}>
            <img src="/Images/main-logo.png" alt="" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li className={`nav-item ${menu === "home" ? "active" : ""}`}>
            <Link to="/" onClick={() => setMenu("home")}>Home</Link>
          </li>
          <li className={`nav-item ${menu === "shop" ? "active" : ""}`}>
            <Link to="/shop" onClick={() => setMenu("shop")}>Shop</Link>
          </li>
          <li className={`nav-item ${menu === "about" ? "active" : ""}`}>
            <Link to="/about" onClick={() => setMenu("about")}>About</Link>
          </li>
          <li className={`nav-item ${menu === "contact" ? "active" : ""}`}>
            <Link to="/contact" onClick={() => setMenu("contact")}>Contact</Link>
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'>
            <button onClick={() => setMenu("loginButton")}>Login</button>
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
