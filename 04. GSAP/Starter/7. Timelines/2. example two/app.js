let tl = gsap
  .timeline({
    defaults: {
      duration: 1,
    },
  })
  .to("h1", {
    y: -100,
    color: "white",
    fontFamily: "arial",
    yoyo: true,
  })
  .to(".box1", {
    x: -100,
    backgroundColor: "red",
  })
  .to(".box2", {
    y: 100,
    backgroundColor: "pink",
  })
  .to(".box3", {
    x: 100,
    backgroundColor: "green",
  });
