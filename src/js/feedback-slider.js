import { tns } from "/node_modules/tiny-slider/src/tiny-slider";

const prevButton = document.querySelector( ".prev-button" ),
  nextButton = document.querySelector( ".next-button" ),
  sliderWrapper = document.querySelector( "#feedbackSlider" );
// feedbackStars = document.querySelectorAll(".feedback__star");

const feedbackSlider = tns( {
  container: "#feedbackSlider",
  items: 3,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayButtonOutput: false,
  autoplayHoverPause: false,
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
  mouseDrag: true,
  responsive: {
    1024: {
      items: 3
    },
    992: {
      items: 2,
    },
    840: {
      items: 2,
      fixedWidth: 408,
    },
    480: {
      fixedWidth: 350,
    },
    375: {
      items: 1,
      center: true,
      fixedWidth: 320,
      touched: true,
    },
    320: {
      slideBy: "page",
      center: false,
      fixedWidth: 270,
      touched: true,
    }
  }
} );

const sliderHeight = +getComputedStyle( sliderWrapper ).height.slice( -0, -2 );

function setPositionForBtn( btnName ) {
  btnName.style.cssText = `top: ${ sliderHeight / 2 }px`;
}

setPositionForBtn( prevButton );
setPositionForBtn( nextButton );
