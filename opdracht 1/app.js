// Animatie voor de header
gsap.from("header", { duration: 1, y: -100, opacity: 0 });

// Animatie voor de paragraaf
gsap.from("p", { duration: 1.5, x: -200, opacity: 0 });

// Animatie voor de afbeeldingen
gsap.from(".image-container img", { 
    duration: 1.5, 
    opacity: 0, 
    scale: 0.5, 
    stagger: 0.2 
});

// Flashing animation for the first image
gsap.to(".image-container img:nth-child(1)", {
    duration: 0.5,
    opacity: 0,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Flashing animation for the second image with a different pattern
gsap.to(".image-container img:nth-child(2)", {
    duration: 0.001,
    opacity: 10,
    repeat: -1,
    scale: 3,
    yoyo: true,
    ease: "power2.inOut",
    delay: 0.2 // Delay to make the flash pattern different
});

// Flashing animation for the third image with a unique pattern
gsap.to(".image-container img:nth-child(3)", {
    duration: 0.01,
    opacity: 10,
    repeat: -1,
    yoyo: true,
    ease: "power3.inOut",
    delay: 0.5
});

// Movement animation for the third image (in a circular motion)
gsap.to(".image-container img:nth-child(3)", {
    duration: 5,
    repeat: -1,
    size: 2,
    motionPath: {
        path: [
            { x: -500, y: 0 },
            { x: 100, y: 100 },
            { x: 0, y: 100 },
            { x: -9000, y: 0 }
        ],
        curviness: 1.25,
        autoRotate: true
    },
    ease: "none"
});
