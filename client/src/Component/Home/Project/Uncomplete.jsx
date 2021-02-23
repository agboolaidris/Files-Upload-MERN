import React, { useEffect } from "react";

function Uncomlete() {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel3");

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
      <div class="panel3 active">
        <div>
          <h2>Instagram Clone</h2>
          <a href="#">View project</a>
        </div>
      </div>
      <div class="panel3">
        <div>
          <h2>Porfolio Website </h2>
          <a href="#">View project</a>
        </div>
      </div>
    </div>
  );
}

export default Uncomlete;
