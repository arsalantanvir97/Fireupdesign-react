import React from "react";
import StarRatings from "react-star-ratings";
const StarRating = ({ rating }) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <StarRatings
          rating={rating}
          starRatedColor="blue"
          // changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="0px"
          starRatedColor="rgb(247, 148, 29)"
        />
      </div>
    </div>
  );
};

export default StarRating;
