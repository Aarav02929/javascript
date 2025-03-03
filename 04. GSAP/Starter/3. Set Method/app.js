gsap.set(".box", {
  opacity: 0,
});

gsap.to(".box", {
  opacity: 1,
  duration: 2,
  x: -100,
  y: 200,
  repeat: -1,
  backgroundColor: "red",
  yoyo: true,
});
