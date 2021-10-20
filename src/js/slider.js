import {tns} from "/node_modules/tiny-slider/src/tiny-slider";

const dots = document.querySelectorAll(".dot"),
  img = document.querySelectorAll(".slider-img");
const slider = tns({
  container: "#mySlider",
  items: 1,
  slideBy: "page",
  controls: false,
  animateIn: "jello",
  animateOut: "rollOut",
  "speed": 300,
  "swipeAngle": false,
  "mode": "gallery",
  nav: dots
});

slider.getInfo();

const addActiveClass = (elem, activeClass) => {
  elem.classList.add(activeClass);
};
const removeActiveClass = (elem, activeClass) => {
  elem.forEach(d => d.classList.remove(activeClass));
};

[...dots].forEach((dot, index) => {
  dot.addEventListener("click", function (e) {
    const target = e.target;
    removeActiveClass(dots, "active");
    addActiveClass(target, "active");

    slider.goTo(index);
  });
});
//
setInterval(() => {
  let current = 0;
  removeActiveClass(dots, "active");
  addActiveClass(dots[current], "active");
  if (current >= dots.length - 1) {
    current = 0;
  }
  current++;

  slider.goTo(current);
}, 1000000);

