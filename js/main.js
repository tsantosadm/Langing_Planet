//Variables Declaration
var windowHeight = window.innerHeight;
var section = document.querySelectorAll(".pt-section");
var pagePreloader = document.querySelector("#pt-preloader");

//height sections definition
var i;
for (i = 0; section.length > i; i++) {
  var mySection = section[i];
  mySection.style.height = windowHeight - 150 + "px";
}

//preloader init
window.addEventListener("load", function () {
  pagePreloader.classList.add("pt-fade-out");

  this.setTimeout(function () {
    pagePreloader.style.display = "none";
  }, 1000);
});

//animation on scroll
AOS.init();
