let menuToggle = document.querySelector(".menu-toggle");
let menuToggleIcon = document.querySelector(".menu-toggle i");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
   menu.classList.toggle("show");
});
