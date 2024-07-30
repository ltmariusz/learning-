const arrow = document.querySelector(".arrow");
arrow.addEventListener("click", function () {
  arrow.classList.toggle("on");
  document.querySelector("nav").classList.toggle("on");
});
