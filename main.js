let myBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 1000) {
        myBtn.style.cssText = "display: block;";
    } else {
        myBtn.style.display = "none";
    }
});

myBtn.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
});