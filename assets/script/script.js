// Back on top function
const backOnTop = document.querySelector(".back-on-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        backOnTop.classList.add("active");
    } else {
        backOnTop.classList.remove("active");
    }
})