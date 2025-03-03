gsap
  .timeline()
  .set(".main-img", {
    opacity: 0,
    x: 800,
  })
  .to(".main-img", {
    opacity: 1,
    x: -50,
    duration: 4,
  });

gsap
  .timeline()
  .set(".main-title", {
    opacity: 0,
    x: 800,
  })
  .to(".main-title", {
    opacity: 1,
    x: -50,
    duration: 4,
  });

gsap
  .timeline()
  .set(".main-info", {
    opacity: 0,
    x: 800,
  })
  .to(".main-info", {
    opacity: 1,
    x: -50,
    duration: 4,
  });

const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
});
