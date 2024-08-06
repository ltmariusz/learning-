var popUp = document.querySelector(".pop-up");
var mainArticle = document.querySelector(".main-article");

document.querySelector(".show").addEventListener("click", popUpToggle);
document.querySelector(".close-pop-up").addEventListener("click", popUpToggle);

function popUpToggle() {
  popUp.classList.toggle("active");
  mainArticle.classList.toggle("blur");
  console.log(popUp);
}
