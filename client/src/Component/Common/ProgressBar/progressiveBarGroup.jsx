import React, { useEffect } from "react";

function ProgressiveBarGroup({ name, percent }) {
  useEffect(() => {
    const progress = document.querySelectorAll(".progress-wrapper");
    progress.forEach((pro) => {
      pro.addEventListener("scroll", () => {
        alert("hello");
      });
    });
  }, []);
  return (
    <div className="progress-wrapper">
      <div className="name">{name}</div>
      <div className="bar"></div>
    </div>
  );
}

export default ProgressiveBarGroup;
