import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Assets/Scss/product.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
const products = () => {
  return (
    <div className='ProductCard mt-3'>
      <div className="imgHover">
        <img src="/Assets/Images/media-01.png" alt="" />
        <button>View Details</button>
      </div>
      <div className="productInfo">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <h2>Product Name</h2>
        <h3 className='original'>
          <span>
              Rs 6,500.00
          </span>
          Rs 4,500.00
        </h3>
      </div>


    </div>

  )
}

export default products