 window.onscroll = function() {
    "use strict";
    const navbar = document.querySelector(".navbar");
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("background_nav");
} else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("background_nav");
  }
} 
function myFunction() {
  let responsive = document.getElementById("myTopnav");
  if (responsive.className === "left_ul") {
    responsive.className += " responsive";
  } else {
    responsive.className = "left_ul";
  }
}

function hideOnClick(){
  let hideResponsiveNav = document.querySelector(".left_ul");
  if (hideResponsiveNav.className === "left_ul" && screen.width <= 600) {
    hideResponsiveNav.className += "hideResponsive";
  } else {
    hideResponsiveNav.className = "left_ul";
  }
}