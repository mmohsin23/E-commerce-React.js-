import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const Reviews = ({review,userName}) => {
  return (
    <div className='ClientReviews'>
      <div className="reviewCard">
        <div className="rating">
          {[...Array(5)].map((star, index) => (
            <FontAwesomeIcon key={index} icon={faStar} />
          ))}
        </div>
        <div className="review">
          {review}
        </div>
        <div className="userName">
          {userName} - 
        </div>
      </div>
    </div>
  )
}

export default Reviews