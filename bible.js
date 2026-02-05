const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", function(){
    if (this.window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Play once
    }
  });
}, { threshold: 0.25 }); // Trigger when 25% visible

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});
