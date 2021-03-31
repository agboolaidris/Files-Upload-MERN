import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/file">Files</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
