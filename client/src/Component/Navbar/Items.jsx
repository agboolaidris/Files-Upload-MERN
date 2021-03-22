import React from "react";
import { Link } from "react-scroll";
function Items({ harmburger, handleClick }) {
  return (
    <div className={!harmburger ? "menu menu-active" : " menu"}>
      <ul className="menu-link">
        <li>
          <Link to="home" onClick={handleClick} smooth={true} duration={1500}>
            Home
          </Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link to="about" onClick={handleClick} smooth={true} duration={1500}>
            About
          </Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link
            to="project"
            onClick={handleClick}
            smooth={true}
            duration={1500}
          >
            Project
          </Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link
            to="testimonial"
            onClick={handleClick}
            smooth={true}
            duration={1500}
          >
            Testimonial
          </Link>
          <div className="underline"></div>
        </li>

        <li>
          <Link
            to="contact"
            onClick={handleClick}
            smooth={true}
            duration={1500}
          >
            Contact
          </Link>
          <div className="underline"></div>
        </li>
      </ul>
      <ul className="social">
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Linkedin</a>
        </li>
        <li>
          <a href="#">Github</a>
        </li>
      </ul>
    </div>
  );
}

export default Items;
