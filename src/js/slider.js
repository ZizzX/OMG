import {tns} from "/node_modules/tiny-slider/src/tiny-slider";

const dots = document.querySelectorAll(".dot");
let index = 0;

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

const addActiveClass = (elem, activeClass) => {
  elem.classList.add(activeClass);
};
const removeActiveClass = (elem, activeClass) => {
  elem.forEach(d => d.classList.remove(activeClass));
};

const changeActiveClass = (elem, className, elemArr) => {
  removeActiveClass(elemArr, className);
  addActiveClass(elem, className);
};

[...dots].forEach((dot, i) => {
  dot.addEventListener("click", function (e) {
    const target = e.target;
    changeActiveClass(target, "active", dots);

    slider.goTo(i);
    index = i;
  });
});

setInterval(() => {
  if (index >= dots.length) {
    index = 0;
  }
  slider.goTo(index);
  changeActiveClass(dots[index], "active", dots);
  index++;
}, 30000);

