import React from "react";

export const Stars = () => {
  const totalStars = 150;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    const size = Math.random() * 2 + 1; // 1px a 3px
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 3 + 2; // 2s - 5s
    const delay = Math.random() * 5;

    stars.push(
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${y}%`,
          left: `${x}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }

  return <div className="stars-container">{stars}</div>;
};
