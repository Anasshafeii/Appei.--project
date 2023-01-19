//////////////////////////////////////////////////
// make mobile nav work

const btnNavEl = document.querySelector(".mobile-nav-btns");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
