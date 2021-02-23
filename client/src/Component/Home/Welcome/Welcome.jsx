import React, { useEffect } from "react";
import idris from "../../../imgs/idris.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Progress from "./Progress";
function Welcome() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="wrapper" id="about">
      <div class="title">
        <h2>About</h2>
        <div class="underline"></div>
      </div>
      <div className="welcome">
        <div className="div" data-aos="fade-right">
          <div className="img-container">
            <img src={idris} alt="" />
          </div>
          <h3>Hi, I'm Idris. Nice to meet you.</h3>
          <cite>
            A enthusiastic and creative full-stack developer with over 1 year of
            experience in web development. My vision is to support every aspect
            of human life with the power of technology.
          </cite>
        </div>
        <div className="progressive" data-aos="fade-left">
          <Progress />
        </div>
        <div className="download">
          <div>
            <a href="/images/myw3schoolsimage.jpg" download="Resume">
              <i className="fas fa-download"></i>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
