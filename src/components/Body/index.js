import React from "react";
import "../Body/style.css";

function Body({ children }) {
  return (
    <div className="body">
      <div className="circle-one"></div>
      <div className="rect-one"></div>
      {children}
    </div>
  );
}

export default Body;
