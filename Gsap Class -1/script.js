gsap.from(".nav h2", {
    y: -30,
    opacity: 0,
    duration: 2,
    delay: 1,
})

gsap.from(".nav_items h4", {
    y: -30,
    opacity: 0,
    duration: 2,
    delay: 1,
})

gsap.from(".hero_heading", {
    y: -30,
    opacity: 0,
    duration: 2,
    delay: 1,
})

gsap.to(".page1 .text", {
 transform:"translateX(-130%)",
 scrollTrigger: {
    trigger: ".page1",
    scriller: true,
    start:"top 0%",
    end:"top -200%",
    scrub: 2,
    pin: true
 }
})



// var tl = gsap.timeline()

// tl.from (".nav h2",{
//     y: -30,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
// })

// tl.from (".nav_items h4",{
//     y: -30,
//     opacity: 0,
//     duration: 1,
// })

// tl.from (".hero .hero_heading",{
//     y: -30,
//     opacity: 0,
//     duration: 1,
// })
