const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});
