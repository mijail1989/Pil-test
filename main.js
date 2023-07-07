document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    height: "auto",
    arrows: false,
    perPage: "3",
  });
  splide.mount();
});
