import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import All from "./All";
import Complete from "./Complete";
import Uncomlete from "./Uncomplete";
import CardGroup from "../Common/ProjectCard/CardGroup";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const projects = [
    {
      id: "1",
      name: "Linked Clone",
      githubRepoURL: "",
      imageURL:
        "https://pilbox.themuse.com/image.jpg?filter=antialias&h=367&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F16798.jpg%3Fv%3D73346cb41cf44e1ff68d5ab6e4dda2196615ffee&w=750",
    },
  ];

  return (
    <div id="project">
      <div className="title">
        <h2>Project</h2>
        <div className="underline"></div>
      </div>
      <div className="project">
        {projects.map((project) => {
          return <CardGroup project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default Project;
