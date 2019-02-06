// Concept: Compass component. Piece is a JS menu with animations.
// Component is intended to exhibit "progressive enhancement."
// "What does that mean?" If the person is blocking or can't run the JS file,
// or the JS file doesn't load, it doesn't engage the meaningful menu elements.
// This is roughly what the HTML and CSS should look like to begin with:

// HTML reference:
// <nav id="compass-nav">
//   <a href="#" id="compass-link"><i id="compass-icon" class="major icon fa-compass"></i></a>
// </nav>
// CSS reference:
// #compassbar {
//   padding: 20px;
//   text-align: right;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   max-width: 100%;
//   #compassicon {
//     // display: flex;
//     color: _palette(accent1);
//   }
// }

class Compass {
  constructor(parent) {
    this.bar = parent;
    // this.icon = this.bar.querySelector('#compass-icon');
    this.initLink = this.bar.querySelector('#compass-link');
    this.initLink.addEventListener('click', ()=> {this.openMenu()});
    // icon.addEventListener('mouseover', ()=> {});
  }
  openMenu() {
    event.preventDefault();
    event.stopPropagation();
  };
}

const compassBar = document.getElementById('compass-bar');
// const compassBar2 = document.querySelector('#compass-bar');
console.log(compassBar);
// console.log(compassBar2);
new Compass(compassBar);


// document.querySelector('.nav').addEventListener('click', () =>{
//   event.preventDefault();
//   alert(`Stay a while and listen!`)
//   event.stopPropagation();
//   // Successfully killed propagation!
//   // Also yes, multiple alerts CAN chain! So annoying!
// });


// logoTag = document.querySelector('.logo-heading')
// logoTag.addEventListener('mouseover', () => {
//   logoTag.style.animationPlayState = "running";
//   event.stopPropagation();
//   // Successfully killed propagation!
// });
//
// logoTag.addEventListener('mouseout', () => {
//   logoTag.style.animationPlayState = "paused";
//   event.stopPropagation();
//   // together, "mouseover" and "mouseout" can reimplement a CSS :hover.
// });
