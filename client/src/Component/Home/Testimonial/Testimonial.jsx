import React, { useEffect } from "react";
import Idris from "../../../imgs/idris.png";

function Testimonial() {
  useEffect(() => {
    const reviews = [
      {
        id: 1,
        name: "Ali Usman",
        job: "Colleague",
        img:
          "https://images.unsplash.com/photo-1613922110510-502f37d20eb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: "anna johnson",
        job: "UX/UI Designer",
        img:
          "https://images.unsplash.com/photo-1613876654199-92cfed5a07a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "Lekan Adebayo",
        job: "intern",
        img:
          "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "Kunle OT",
        job: "Software Engineer",
        img:
          "https://images.unsplash.com/photo-1603775493298-e06a5f21e46c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
    ];

    // Select items
    const img = document.getElementById("person-img");
    const author = document.getElementById("author");
    const job = document.getElementById("job");
    const info = document.getElementById("info");

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const randomBtn = document.querySelector(".random-btn");

    // set starting item
    let currentItem = 0;

    // load initial item

    window.addEventListener("DOMContentLoaded", function () {
      showPerson();
    });

    // show person based on item
    function showPerson() {
      const item = reviews[currentItem];
      img.src = item.img;
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;
    }

    // show next btn
    nextBtn.addEventListener("click", function () {
      currentItem++;
      if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
      showPerson();
    });

    // show prev btn
    prevBtn.addEventListener("click", function () {
      currentItem--;
      if (currentItem < 0) {
        currentItem = reviews.length - 1;
      }
      showPerson();
    });

    // show random person

    randomBtn.addEventListener("click", function () {
      currentItem = Math.floor(Math.random() * reviews.length);
      showPerson();
    });
  }, []);
  return (
    <div className="test-wrapper" id="testimonial">
      <div class="testimonial">
        <div class="title">
          <h2>Testimonial</h2>
          <div class="underline"></div>
        </div>

        <article class="review">
          <div class="img-containers">
            <img src={Idris} id="person-img" alt="" />
          </div>
          <h4 id="author">Hammed Damme</h4>
          <p id="job">Boss</p>
          <p id="info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            quasi id fugit esse distinctio reiciendis officia vero consequatur.
            Vero, distinctio!
          </p>

          <div class="button-container">
            <button class="prev-btn">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="next-btn">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>

          <button class="random-btn">Random</button>
        </article>
      </div>
    </div>
  );
}

export default Testimonial;
