import React from "react";
import ProgressiveBarGroup from "../../Common/ProgressBar/progressiveBarGroup";

function Progress({ percentage = 20 }) {
  return (
    <>
      <ProgressiveBarGroup name="HTML" percent={90} />
    </>
  );
}

export default Progress;
