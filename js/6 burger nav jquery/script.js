// const $burger = $(".burger");
// $($burger).on("click", function () {
//   $($burger).toggle("active");
// });
const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  document.querySelector(".fa-bars").classList.toggle("active");
  document.querySelector(".fa-xmark").classList.toggle("active");
});
