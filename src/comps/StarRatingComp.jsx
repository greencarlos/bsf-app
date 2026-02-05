import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRatingComp = () => {
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  return (
    <div>
      {stars.map((_, index) => {
        return <FaStar key={index} size={24} color={"#F2C265"} />;
      })}
    </div>
  );
};

export default StarRatingComp;
