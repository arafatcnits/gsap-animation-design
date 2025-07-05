var menu = document.querySelector(".navbar i")
var cross = document.querySelector(".sidebar i")


var tl = gsap.timeline()

tl.to(".sidebar", {
    right: 0,
    duration: 0.8
})

tl.from(".sidebar h4", {
    x: 150,
    duration: 0.6,
    stagger:0.2,
    opacity:0
})

tl.from(".sidebar i", {
    opacity:0
})

tl.pause()

menu.addEventListener("click", function(){
    tl.play()
}) 

cross.addEventListener("click", function(){
   tl.reverse()
}) 
