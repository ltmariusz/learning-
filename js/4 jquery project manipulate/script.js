var $text = $(".text");
$(".plus").on("click", function () {
  $($text).css("font-size", "+=5");
});
// $(".arrorw").css("")
$(".blue").on("click", function () {
  $("body").css("background-color", "blue");
});
$(".red").on("click", function () {
  $("body").css("background-color", "lightcoral");
});
$(".arrow").on("click", space);

function space() {
  //   console.log("tesss");
  $($text).css({
    "letter-spacing": "+=2px",
  });
}
console.log($text);
