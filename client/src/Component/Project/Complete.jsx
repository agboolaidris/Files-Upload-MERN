import React, { useEffect } from "react";

function Complete() {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel2");

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
    <div className="panels">
      <div className="panel2 active">
        <div>
          <h2>Blog website</h2>
          <a href="#">View project</a>
        </div>
      </div>
      <div className="panel2">
        <div>
          <h2>Online shopping </h2>
          <a href="#">View project</a>
        </div>
      </div>
      <div className="panel2">
        <div>
          <h2>Chat App</h2>
          <a href="#">View project</a>
        </div>
      </div>
    </div>
  );
}

export default Complete;
