import React from "react";

export const NavButton = ({ borderColor, buttonBg, textColor, buttonLabel }) => {
  return (
    <button className={`${buttonBg} border-2 ${borderColor} rounded-lg mx-2`}>
      <a
        href="/#"
        className={`py-3 text-base font-semibold px-7 ${textColor} hover:opacity-60`}
      >
        {buttonLabel}
      </a>
    </button>
  );
};