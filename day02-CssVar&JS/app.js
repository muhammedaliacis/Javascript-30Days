const spacing = document.getElementById("spacing");
const blurr = document.getElementById("blur");
const base = document.getElementById("basecolor");
const input = document.querySelectorAll(".input");
const image = document.getElementById("imgg")
input.forEach(function(inp){
    inp.addEventListener("change", run);
    inp.addEventListener("mouseover", run);

})

function run(){
    image.setAttribute("style", `border: ${spacing.value}px solid ${base.value}; filter: blur(${blurr.value}px);`)
}