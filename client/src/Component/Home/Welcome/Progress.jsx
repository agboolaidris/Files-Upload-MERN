import React from "react";

function Progress({ percentage = 20 }) {
  return (
    <>
      <div className="html prog">
        <div className="name">HTML</div>
        <div className="bar"></div>
      </div>
      <div className="css prog">
        <div className="name">CSS</div>
        <div className="bar"></div>
      </div>
      <div className="js prog">
        <div className="name">Javascript</div>
        <div className="bar"></div>
      </div>
      <div className="sass prog">
        <div className="name">Sass</div>
        <div className="bar"></div>
      </div>
      <div className="react prog">
        <div className="name">React</div>
        <div className="bar"></div>
      </div>
      <div className="redux prog">
        <div className="name">Redux</div>
        <div className="bar"></div>
      </div>
      <div className="nodejs prog">
        <div className="name">Nodejs</div>
        <div className="bar"></div>
      </div>
      <div className="express prog">
        <div className="name">Expressjs</div>
        <div className="bar"></div>
      </div>
      <div className="mongodb prog">
        <div className="name">Mongodb</div>
        <div className="bar"></div>
      </div>
      <div className="figma prog">
        <div className="name">Figma</div>
        <div className="bar"></div>
      </div>
    </>
  );
}

export default Progress;
