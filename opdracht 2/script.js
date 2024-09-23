// Stap 1
gsap.to(".circle-1", {
    x: 300,
    scale: 1.5,
    backgroundColor: "#FF6347",
    duration: 2,
    ease: "expo.out"
});


// Stap 2
// gsap.from(".circle-2", {
//     x: -300,
//     opacity: 0,
//     duration: 2,
//     ease: "bounce.out"
// });

// Stap 3
gsap.fromTo(".circle-3", 
    { 
        x: 300, 
        opacity: 0 
    }, 
    { 
        x: 0, 
        opacity: 1, 
        duration: 2, 
        ease: "elastic.out(1, 0.3)" 
    }
);

// Stap 3
document.querySelectorAll(".circle").forEach(circle => {
    circle.addEventListener("mouseenter", () => {
      gsap.to(circle, {scale: 1.2, duration: 0.5});
    });
    circle.addEventListener("mouseleave", () => {
      gsap.to(circle, {scale: 1, duration: 0.5});
    });
});

// Stap 4
document.querySelectorAll(".circle").forEach(circle => {
    circle.addEventListener("mouseenter", () => {
      gsap.to(circle, { scale: 1.2, duration: 0.5 });
    });
    circle.addEventListener("mouseleave", () => {
      gsap.to(circle, { scale: 1, duration: 0.5 });
    });
});

// Bonus
gsap.fromTo(".circle-2", 
    { 
      x: -150, 
      opacity: 0
    }, 
    { 
      x: 150,
      opacity: 1,
      duration: 2, 
      ease: "bounce.out", 
      repeat: -1,
      yoyo: true
    }
  );