gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline();

timeline.to(".heart", {
  scrollTrigger: {
    trigger: ".heart-text",
    start: "20px 80%",
    end: "bottom 300px",
    pin:true,
    scrub: true,
    markers: false,
    toggleActions: "restart pause reverse pause"
  },
  y: 400,
});

timeline.to(".section-3", {
  scrollTrigger: {
    trigger: ".section-3",
    pin:".section-3",
  }
  });

timeline.to(".data", {
  end:1000, 
  incremenet: 10
});


timeline.fromTo(".section4-h2", {opacity: 0},
{
  opacity: 1,
  scrollTrigger: {
    trigger: ".section4-h2",
    start: "top 30%",
    end: "bottom 20%",
    scrub: true,
    markers: false,
    ease: "sine.out",
    pin: ".section4-h2",
    toggleActions: "restart pause reverse pause"
  }
});

timeline.fromTo(".section5-h2", {opacity: 0},
{
  opacity: 1,
  scrollTrigger: {
    trigger: ".section5-h2",
    start: "top 30%",
    end: "bottom 20%",
    scrub: true,
    markers: false,
    toggleActions: "restart pause reverse pause"
  }
});

timeline.fromTo(".section5-p", {opacity: 0},
{
  opacity: 1,
  scrollTrigger: {
    trigger: ".section5-p",
    start: "top 30%",
    end: "bottom 20%",
    scrub: true,
    markers: true,
    toggleActions: "restart pause reverse pause"
  }
});

timeline.fromTo(".section6-h2", {opacity: 0},
{
  opacity: 1,
  scrollTrigger: {
    trigger: ".section6-h2",
    start: "top 30%",
    end: "bottom 20%",
    scrub: true,
    pin: true,
    markers: true,
    toggleActions: "restart pause reverse pause"
  }
});