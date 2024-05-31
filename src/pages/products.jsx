import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
const products = ({productName, lastPrice, newPrice, imgSrc}) => {
  return (
    <div className='ProductCard mt-3'>
      <div className="imgHover">
        <img src={imgSrc} alt="" />
        <button>View Details</button>
      </div>
      <div className="productInfo">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <h2>{productName}</h2>
        <h3 className='original'>
          {lastPrice && (
            <span>
              Rs {lastPrice}
            </span>
          )}
          Rs {newPrice}
        </h3>
      </div>


    </div>

  )
}

export default products