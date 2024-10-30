const barsBtn = document.querySelector(".bars-btn")
const closeBtn = document.querySelector (".left-nav-btn")
const leftBtn = document.querySelector(".left-nav")


barsBtn.addEventListener("click", function(){
    leftBtn.classList.add("toggle")
    leftBtn.classList.remove("remove")
})
closeBtn.addEventListener("click", function(){
    leftBtn.classList.remove("toggle")
    leftBtn.classList.add("remove")
})



var loader = document.querySelector(".gif")

window.addEventListener("load", vanish);

function vanish(){
    loader.classList.add("disppear");
}