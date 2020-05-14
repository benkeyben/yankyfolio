// import { polyfill } from 'seamless-scroll-polyfill';
// polyfill();

/*Open all External links in a New Tab*/
(function () {
  for (let anchorList = document.getElementsByTagName('a'), a = 0; a < anchorList.length; a++) {
    let anchorItem = anchorList[a];
    anchorItem.getAttribute('href') && anchorItem.hostname !== location.hostname && (anchorItem.target = '_blank');
  }
})();

/*Scrollinng functions of the Sticky navbar */
//Get the button

const scrollTopButton = document.querySelector('.scroll__top-button');
const nav = document.querySelector('.navigation');
let leftNav = document.querySelector('.navigation__left');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    nav.classList.add('sticky');
    leftNav.style.cssText = 'opacity: 1; visibility: visible';
    scrollTopButton.style.cssText = 'opacity: 1; visibility: visible';
  } else {
    nav.classList.remove('sticky');
    leftNav.style.cssText = 'opacity: 0; visibility: hidden';
    scrollTopButton.style.cssText = 'opacity: 0; visibility: hidden';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
