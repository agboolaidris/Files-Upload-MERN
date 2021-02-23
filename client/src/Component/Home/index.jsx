import React from "react";
import Content from "./Content/Content";
import Project from "./Project/Project";
import Skills from "./Skill/Skills";
import Testimonial from "./Testimonial/Testimonial";
import Welcome from "./Welcome/Welcome";

function Home() {
  return (
    <main>
      <Content />
      <Welcome />
      <Skills />
      <Project />
      <Testimonial />
    </main>
  );
}

export default Home;
