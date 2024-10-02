function animateMain() {
    let main_tl = gsap.timeline({ paused: true });

    main_tl
        .add(animateBox1(), "start")
        .add(animateBox2(), "start+=0.2")
        .add(animateBox3(), "start+=0.4")
        .add(animateBox4(), "start+=0.6")
        .add(animateBox5(), "start+=0.8")
        .add(animateBox6(), "start+=1");

    return main_tl;
}

function animateBox1() {
    return gsap.timeline().from(".box1", { x: -300, opacity: 0, ease: "expo.out", duration: 1 });
}

function animateBox2() {
    return gsap.timeline().from(".box2", { x: 300, opacity: 0, ease: "expo.out", duration: 1 });
}

function animateBox3() {
    return gsap.timeline().from(".box3", { y: -300, opacity: 0, ease: "expo.out", duration: 1 });
}

function animateBox4() {
    return gsap.timeline().from(".box4", { y: 300, opacity: 0, ease: "expo.out", duration: 1 });
}

function animateBox5() {
    return gsap.timeline().from(".box5", { scale: 0, opacity: 0, ease: "expo.out", duration: 1 });
}

function animateBox6() {
    return gsap.timeline().from(".box6", { rotation: 360, opacity: 0, ease: "expo.out", duration: 1 });
}

const mainAnimation = animateMain();

document.getElementById("playBtn").addEventListener("click", () => mainAnimation.play());
document.getElementById("pauseBtn").addEventListener("click", () => mainAnimation.pause());
document.getElementById("reverseBtn").addEventListener("click", () => mainAnimation.reverse());
document.getElementById("restartBtn").addEventListener("click", () => mainAnimation.restart());