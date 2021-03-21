import React, { useState } from "react";
import Menu from "../../imgs/bar.svg";
import Multiply from "../../imgs/multiply.png";
import Items from "./Items";

function Navbar() {
  const [harmburger, setharmburger] = useState(true);
  const [items, setitems] = useState(false);

  const handleClick = () => {
    if (items) {
      setitems(false);
      setharmburger(true);
    } else {
      setharmburger(false);
      setitems(true);
    }
  };
  return (
    <nav>
      <div className="harmburger" onClick={handleClick}>
        {harmburger ? (
          <img src={Menu} alt="harmburger" />
        ) : (
          <img src={Multiply} alt="" />
        )}
      </div>

      <Items items={items} handleClick={handleClick} />
    </nav>
  );
}

export default Navbar;
