import React from "react";
import { animateScroll, Link } from "react-scroll";
import Text from "./Text";

function Content() {
  return (
    <div className=" content" id="home">
      <Text />

      <Link to="about" className="arrow" smooth={true} duration={1500}>
        <i className="fas fa-arrow-circle-down"></i>
      </Link>
    </div>
  );
}

export default Content;
