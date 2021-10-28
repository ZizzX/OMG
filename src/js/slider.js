import { tns } from "/node_modules/tiny-slider/src/tiny-slider";

const dots = document.querySelectorAll( ".dot" );

const slider = tns( {
  container: "#mySlider",
  items: 1,
  slideBy: "page",
  controls: false,
  speed: 300,
  autoplayTimeout: 3000,
  swipeAngle: false,
  mode: "gallery",
  nav: dots,
  navContainer: ".dots-1",
  autoplay: true,
  animateIn: "zoom-in",
  animateOut: "fade-out",
  autoHeight: true,
  
} );

const sliderBottom = tns( {
  container: "#mySlider2",
  items: 1,
  slideBy: "page",
  autoplayHoverPause: false,
  controls: false,
  speed: 300,
  touch: true,
  navContainer: ".dots-2",
  fixedWidth: 950,
  autoHeight: true,
  axis: "horizontal",
  nav: dots,
  navAsThumbnails: true,
  autoplay: true,
  autoplayTimeout: 3000,
  center: true,
  autoplayButtonOutput: false,
  autoplayButton: false,
  responsive: {
    1024: {
      items: 3
    },
    992: {
      items: 2,
    },
    840: {
      items: 2,
      fixedWidth: 900,
    },
    480: {
      fixedWidth: 980,
    },
    375: {
      items: 1,
      center: true,
      fixedWidth: 900,
      touched: true,
    },
    320: {
      slideBy: "page",
      center: false,
      fixedWidth: 600,
      touched: true,
    }
  }
} );

const addActiveClass = ( elem, activeClass ) => {
  elem.classList.add( activeClass );
};
const removeActiveClass = ( elem, activeClass ) => {
  elem.forEach( d => d.classList.remove( activeClass ) );
};

const changeActiveClass = ( elem, className, elemArr ) => {
  removeActiveClass( elemArr, className );
  addActiveClass( elem, className );
};

[ ...dots ].forEach( ( dot, i ) => {
  dot.addEventListener( "click", function ( e ) {
    const target = e.target;
    changeActiveClass( target, "active", dots );
		
    slider.goTo( i );
    sliderBottom.goTo( i );
    index = i;
  } );
} );

