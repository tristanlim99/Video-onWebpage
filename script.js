const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

//click event listener for the control button
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    //if button does NOT contain 'slide'
    btn.classList.add("slide"); //then add 'slide' to the classlist
    video.pause(); //trigger video pause
  } else {
    btn.classList.remove("slide"); //else just remove 'slide' form the classlist/ this block is the default
    video.play(); //trigger video play
  }
});

//preloader
const preloader = document.querySelector(".preloader");

//window onload event listener
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader"); //trigger the preloader classlist to add the class 'hide-preloader' when the page is finished loading
});
