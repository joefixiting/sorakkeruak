import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-lg border border-white bg-white/10 backdrop-blur-md p-4 shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;