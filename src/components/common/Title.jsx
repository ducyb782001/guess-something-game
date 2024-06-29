import React from "react";

function Title({ children, className = "" }) {
  return (
    <div
      className={`text-[18px] font-semibold leading-[22px] text-[#f5bb0a] ${className}`}
    >
      {children}
    </div>
  );
}

export default Title;
