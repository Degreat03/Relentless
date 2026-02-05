const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", function(){
    if (this.window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})
