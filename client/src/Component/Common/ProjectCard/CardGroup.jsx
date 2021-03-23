import React from "react";

function CardGroup({ project }) {
  return (
    <div class="card-group">
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
