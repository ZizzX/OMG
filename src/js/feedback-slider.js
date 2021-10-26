import {tns} from "/node_modules/tiny-slider/src/tiny-slider";

const slider = tns({
  container: "#feedbackSlider",
  items: 3,
  responsive: {
    480: {
      items: 1,
    },
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2
    },
    700: {
      gutter: 30
    },
    900: {
      items: 2
    }
  }
});