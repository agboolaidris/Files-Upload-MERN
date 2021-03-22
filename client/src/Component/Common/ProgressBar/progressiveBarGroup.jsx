import React, { useEffect, useState } from "react";

function ProgressiveBarGroup({ name, percent }) {
  const [style, setstyle] = useState({
    background: "linear-gradient(to right, yellow, black)",
    width: `10%`,
    height: "100%",
    textAlign: "right",
    padding: "0.3em 0",
    color: "blue",
  });
  useEffect(() => {
    document.querySelectorAll(".width").forEach((wid) => {
      wid.addEventListener("click", () => {
        setInterval(() => {
          if (wid.style.width < `${percent}%`) {
            wid.style.width += `1%`;
          }
        }, 100);
      });
    });
  });
  return (
    <div className="progress-wrapper">
      <div className="name">{name}</div>
      <div style={style} className="width">
        {percent}%
      </div>
    </div>
  );
}

export default ProgressiveBarGroup;
