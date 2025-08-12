document.querySelectorAll(".img1, .img2, .img3").forEach(function (img) {
  img.addEventListener("mouseenter", function () {
    img.classList.add("pulse");
  });
  img.addEventListener("animationend", function () {
    img.classList.remove("pulse");
  });
});
document.querySelectorAll(".img1, .img2, .img3").forEach(function (img) {
  img.addEventListener("mouseenter", function () {
    img.classList.add("pulse");
  });
  img.addEventListener("animationend", function () {
    img.classList.remove("pulse");
  });
});

const btn = document.querySelector(".button");
if (btn) {
  btn.addEventListener("mouseenter", function () {
    btn.classList.add("pulse-btn");
  });
  btn.addEventListener("animationend", function () {
    btn.classList.remove("pulse-btn");
  });
}
