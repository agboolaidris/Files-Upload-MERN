import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function CardGroup({ project }) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div class="card-group" data-aos="flip-up">
      <div
        class="front"
        style={{ backgroundImage: `url(${project.imageURL})` }}
      >
        {project.name}
      </div>
      <div class="back">
        <div className="project-title">{project.name}</div>
        <div className="technology">{project.technology}</div>
        <p>{project.description}</p>
        <div className="icon">
          <a href={project.githubRepoURL}>
            <i className="fab fa-github"></i>
          </a>
          <a href={project.websiteURL}>
            <i class="fas fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardGroup;
