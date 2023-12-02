import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import style from "./RatingStars.module.css";

export default function RatingStars({ handleRating }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const handleClick = (index) => {
    let newValue;
    // Set the value to 1 for the first star, 5 for the last star, and the index + 1 for the rest
    if (index === 0) {
      newValue = 1;
    } else if (index === stars.length - 1) {
      newValue = 5;
    } else {
      newValue = index + 1;
    }
    handleRating(++index);

    setCurrentValue(newValue);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={style.stars}>
      {stars.map((_, index) => (
        <FaStar
          key={index}
          size={24}
          onClick={() => handleClick(index)}
          onMouseOver={() => handleMouseOver(index + 1)}
          onMouseLeave={handleMouseLeave}
          color={
            (hoverValue || currentValue) > index ? colors.orange : colors.grey
          }
          style={{
            marginRight: 10,
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
}

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};
