import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import All from "./All";
import Complete from "./Complete";
import Uncomlete from "./Uncomplete";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="test-container" id="project">
      <div className="title">
        <h2>Project</h2>
        <div className="underline"></div>
      </div>
      <div className="ac-container">
        <div className="flex">
          <input id="ac-1" name="accordion-1" type="radio" defaultChecked />
          <label htmlFor="ac-1">ALL</label>
          <div className="ac-small div">
            <All />
          </div>
        </div>
        <div className="flex">
          <input id="ac-2" name="accordion-1" type="radio" />
          <label htmlFor="ac-2">Completed</label>
          <div className="ac-medium div">
            <Complete />
          </div>
        </div>
        <div className="flex">
          <input id="ac-3" name="accordion-1" type="radio" />
          <label htmlFor="ac-3">Uncomplete</label>
          <div className="ac-large div">
            <Uncomlete />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
