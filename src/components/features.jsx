import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faHeadset, faShieldAlt, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const features = () => {
  return (
    <div className="features-list">
      <ul>
        <li className="feature">
          <FontAwesomeIcon icon={faTruck} />
          <div className="content">
            <h3>Free Shipping</h3>
            <p>Free shipping over $100</p>
          </div>
        </li>
        <li className="feature">
          <FontAwesomeIcon icon={faShieldAlt} />
          <div className="content">
            <h3>Payment Secure</h3>
            <p>Got 100% Payment Safe</p>
          </div>
        </li>
        <li className="feature">
          <FontAwesomeIcon icon={faHeadset} />
          <div className="content">
            <h3>Support 24/7</h3>
            <p>Top quality 24/7 Support</p>
          </div>
        </li>
        <li className="feature">
          <FontAwesomeIcon icon={faWallet} />
          <div className="content">
            <h3>100% Money Back</h3>
            <p>Customers Money Backs</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default features;
