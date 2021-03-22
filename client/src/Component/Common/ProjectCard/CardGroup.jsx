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
      <div class="back">Back</div>
    </div>
  );
}

export default CardGroup;
