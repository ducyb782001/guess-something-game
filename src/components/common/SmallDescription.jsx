import React from "react";

function SmallDescription({ children, className = "" }) {
  return (
    <div className={`text-base font-semibold text-white ${className}`}>
      {children}
    </div>
  );
}

export default SmallDescription;
