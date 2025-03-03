gsap.set(".box1, .box2, .box3", {
  border: "1px solid blue",
});
// gsap.from(".box1", {
//   y: -200,
//   duration: 3,
//   ease: "linear",
//   yoyo: true,
//   repeat: -1,
// });

gsap.fromTo(
  ".box2",
  { y: 200, opacity: 0 },
  {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    borderRadius: 0,
    yoyo: true,
    repeat: -1,
  }
);
