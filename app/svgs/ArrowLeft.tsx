import React from "react";

const ArrowLeft = ({ stroke }: { stroke?: string }) => {
  return (
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9L2 5l4-4"
        stroke={stroke ? stroke : "#4661E6"}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ArrowLeft;
