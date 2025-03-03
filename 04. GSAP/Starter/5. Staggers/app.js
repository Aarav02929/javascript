gsap.set(".box", {
  height: 100,
  width: 100,
  backgroundColor: "red",
  borderRadius: "10%",
});

gsap.to(".box", {
  borderRadius: "50%",
  duration: 1,
  y: -100,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1,
  stagger: {
    amount: 4,
    each: 0.5,
    from: 0,
  },
});
