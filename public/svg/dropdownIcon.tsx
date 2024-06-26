import React from "react";

const DropdownIcon = ({ color = "black" }: { color?: string }) => {
  return (
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 6.83463L0 1.83464L1.16667 0.667969L5 4.5013L8.83333 0.667969L10 1.83464L5 6.83463Z"
        fill={color}
      />
    </svg>
  );
};

export default DropdownIcon;
