import {tns} from "/node_modules/tiny-slider/src/tiny-slider";

const prevButton = document.querySelector(".prev-button"),
  nextButton = document.querySelector(".next-button"),
  sliderWrapper = document.querySelector("#feedbackSlider");
// feedbackStars = document.querySelectorAll(".feedback__star");

const feedbackSlider = tns({
  container: "#feedbackSlider",
  items: 3,
  slideBy: 1,
  touch: true,
  animateIn: "tns-",
  controls: true,
  autoHeight: false,
  nav: true,
  arrowKeys: true,
  controlsContainer: "#navContainer",
  prevButton: "#prevButton",
  nextButton: "#nextButton",
  hasControls: true,
  controlsPosition: "bottom",
  responsive: {
    1024: {
      items: 3
    },
    992: {
      items: 2,
    },
    840: {
      items: 2,
    },
    375: {
      items: 1
    }
  }
});

const sliderHeight = +getComputedStyle(sliderWrapper).height.slice(-0, -2);

function setPositionForBtn(btnName) {
  btnName.style.cssText = `top: ${Math.floor(sliderHeight) / 2}px`;
}

setPositionForBtn(prevButton);
setPositionForBtn(nextButton);
