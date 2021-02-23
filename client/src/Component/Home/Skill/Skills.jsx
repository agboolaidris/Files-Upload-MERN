import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div class="container">
      <div>
        <div class="card">
          <div class="imgBx">
            <i className="fas fa-code 5x"></i>
          </div>
          <div class="contents">
            <span>front-end skill</span>
            <p>
              Writing well designed, efficient code by using best software
              development practices.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="imgBx">
            <i className="fas fa-database"></i>
          </div>
          <div class="contents">
            <span>Back-end skill</span>
            <p>
              Design and implementation of low-latency, high-availabilty, and
              performance application
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="imgBx">
            <i className="fas fa-drafting-compass"></i>
          </div>
          <div class="contents">
            <span>design skill</span>
            <p>
              Creative, analytical, and understand interaction design principles
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="imgBx">
            <i className="fas fa-handshake"></i>
          </div>
          <div class="contents">
            <span>Soft skill</span>
            <p>
              Excellent communication and demonstrate good leadership, trust and
              support with the entire team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
