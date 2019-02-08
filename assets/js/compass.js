// Concept: Compass component. Piece is a JS menu with animations.
// Component is intended to exhibit "progressive enhancement."
// "What does that mean?" If the person is blocking or can't run the JS file,
// or the JS file doesn't load, it doesn't engage the meaningful menu elements.
// Instead it operates the HTML file's default behavior, which is a simple clickable link.
// This is roughly what the HTML and CSS should look like to begin with:

// HTML reference:
// <nav id="compass-nav">
//   <a href="#" id="compass-link"><i id="compass-icon" class="major icon fa-compass"></i></a>
// </nav>
// CSS reference:
// #compass-bar {
//   // padding: 1em;
//   text-align: right;
//   position: fixed;
//   top: 1em;
//   right: 1em;
//   width: 15em;
//   #nav-panel {
//     @include vendor('display', 'flex');
//     @include vendor('flex-direction', 'column');
//     position: absolute;
//     height: 100%;
//     width: 100%;
//   }
//   .nav-button {
//     width: 100%;
//   }
//   #compass-icon {// #compass-bar {
//   text-align: right;
//   position: fixed;
//   top: 1em;
//   right: 1em;
//   width: 15em;
//   #nav-panel {
//     @include vendor('display', 'flex');
//     @include vendor('flex-direction', 'column');
//     position: absolute;
//     height: 100%;
//     width: 100%;
//   }
//   .nav-button {
//     width: 100%;
//   }
//   #compass-icon {
//     color: _palette(accent1);
//     &:hover {
//       -webkit-animation: spin 1.5s linear infinite;
//       animation: spin 1.5s linear infinite;
//     }
//   }
// }
//
// .invisible {
//   visibility: hidden;
// }
//
// @-webkit-keyframes spin {
//     0%   {
//         -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: rotate(0deg);  /* IE 9 */
//         transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */
//     }
//     100% {
//         -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: rotate(360deg);  /* IE 9 */
//         transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */
//     }
// }
//
// @keyframes spin {
//     0%   {
//         -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: rotate(0deg);  /* IE 9 */
//         transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */
//     }
//     100% {
//         -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: rotate(360deg);  /* IE 9 */
//         transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */
//     }
// }
//     color: _palette(accent1);
//     &:hover {
//       -webkit-animation: spin 1.5s linear infinite;
//       animation: spin 1.5s linear infinite;
//     }
//   }
// }
//
// .invisible {
//   visibility: hidden;
// }
//
// @-webkit-keyframes spin {
//     0%   {
//         -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: rotate(0deg);  /* IE 9 */
//         transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */
//     }
//     100% {
//         -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: rotate(360deg);  /* IE 9 */
//         transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */
//     }
// }
//
// @keyframes spin {
//     0%   {
//         -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: rotate(0deg);  /* IE 9 */
//         transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */
//     }
//     100% {
//         -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */
//         -ms-transform: rotate(360deg);  /* IE 9 */
//         transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */
//     }
// }

class Compass {
  constructor(parent) {
    this.bar = parent;
    this.icon = this.bar.querySelector('#compass-icon');
    this.panel = this.bar.querySelector('#nav-panel');
    this.initLink = this.bar.querySelector('#compass-link');
    this.initLink.addEventListener('click', ()=> {this.openMenu()});
    // icon.addEventListener('mouseover', ()=> {});
  }
  openMenu() {
    event.preventDefault();
    event.stopPropagation();
    this.panel.classList.toggle('invisible');
    // this.icon.style.zIndex = "9999";
    this.bar.style.zIndex = "9999";
    // this.panel.style.zIndex = "9999";
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
