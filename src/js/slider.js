import { tns } from "/node_modules/tiny-slider/src/tiny-slider";

const dots = document.querySelectorAll( ".dot" );

const slider = tns( {
  container: "#mySlider",
  items: 1,
  slideBy: "page",
  controls: false,
  speed: 300,
  animateDelay: 0,
  animateNormal: "",
  swipeAngle: false,
  mode: "gallery",
  nav: dots,
  navContainer: ".dots-1",
  autoplay: true,
} );

const sliderBottom = tns( {
  container: "#mySlider2",
  items: 1,
  slideBy: "page",
  controls: false,
  speed: 300,
  swipeAngle: false,
  mode: "carousel",
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

