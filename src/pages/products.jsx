import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
const Products = ({ productName, lastPrice, newPrice, imgSrc }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="ProductCard mt-3">
      <div className="imgHover">
        <img src={imgSrc} alt="" />
        <button>View Details</button>
      </div>
      <div className="productInfo">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                id="ratingDynamic"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FontAwesomeIcon className="Star" 
              icon={faStar} 
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
        <h2>{productName}</h2>
        <h3 className="original">
          {lastPrice && <span>Rs {lastPrice}</span>}
          Rs {newPrice}
        </h3>
      </div>
    </div>
  );
};

export default Products;
