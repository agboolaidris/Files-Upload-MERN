import React from "react";
import { Link } from "react-scroll";
function Items({ items, handleClick }) {
  return (
    <ul className={items ? "menu menu-active" : " menu"}>
      <li>
        <Link to="home" onClick={handleClick} smooth={true} duration={1500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" onClick={handleClick} smooth={true} duration={1500}>
          About
        </Link>
      </li>
      <li>
        <Link to="project" onClick={handleClick} smooth={true} duration={1500}>
          Project
        </Link>
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
      </li>

      <li>
        <Link to="contact" onClick={handleClick} smooth={true} duration={1500}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Items;
