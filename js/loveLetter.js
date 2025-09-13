document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const card = document.querySelector(".card");

  container.addEventListener("mouseenter", () => {
    // anima para top: -90px
    card.style.transition = "top 1s";
    card.style.top = "-90px";
  });

  container.addEventListener("mouseleave", () => {
    // volta para top: 0
    card.style.transition = "top 1s";
    card.style.top = "0";
  });
});
