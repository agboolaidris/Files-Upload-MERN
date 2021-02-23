import React, { useEffect } from "react";

function All() {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");

    panels.forEach(function (panel) {
      panel.addEventListener("click", function () {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });

    function removeActiveClasses() {
      panels.forEach(function (panel) {
        panel.classList.remove("active");
      });
    }
  }, []);
  return (
    <div class="panels">
      <div class="panel active">
        <div>
          <h2>Blog website</h2>
          <a href="#">View project</a>
        </div>
      </div>
      <div class="panel">
        <div>
          <h2>Online shopping </h2>
          <a href="#">View project</a>
        </div>
      </div>
      <div class="panel">
        <div>
          <h2>Chat App</h2>
          <a href="#">View project</a>
        </div>
      </div>
      <div class="panel">
        <div>
          <h2>Blog website</h2>
          <a href="#">View project</a>
        </div>
      </div>
      <div class="panel">
        <div>
          <h2>Blog website</h2>
          <a href="#">View project</a>
        </div>
      </div>
    </div>
  );
}

export default All;
