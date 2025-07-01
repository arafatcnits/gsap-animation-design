var path = "M 10 100 Q 250 100 490 100"
var finalpath = "M 10 100 Q 250 100 490 100"


var string = document.querySelector("#string")

string.addEventListener("mousemove", function (dets) {
    path = 'M 10 100 Q 500 ${dets.y} 990 100',

        gsap.to("svg path", {
            attr: { d: path }
        })
})