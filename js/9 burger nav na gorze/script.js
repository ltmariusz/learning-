const burgerV2 = document.querySelector(".burger")
const activeAllElements = document.querySelectorAll(".activeJs")
burgerV2.addEventListener("click", function () {
  for (let i = 0; i < activeAllElements.length; i++) {
    const element = activeAllElements[i];
    element.classList.toggle("active")
    
  }
})


// $(".burger").on("click", function () {
//   $(".fa-solid, .burger, .wrapper").toggleClass("active");
// });
// const burger = document.querySelector(".burger");

document.querySelector(".powrot").addEventListener("click", function () {
  window.location.href = "../";
});
