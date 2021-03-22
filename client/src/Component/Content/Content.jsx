import React from "react";
import { animateScroll, Link } from "react-scroll";
import Text from "./Text";
import arrow from "../../imgs/arrowdown.svg";

function Content() {
  return (
    <div className=" content" id="home">
      <div>
        <p className="name-text">Hello, I'm Idris</p>
        <Text />
        <div>
          <Link to="about" className="arrow" smooth={true} duration={1500}>
            <img src={arrow} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
