// Button to top that fades in slowly
// Actives at 500 unless modified

// - Guac

let scrollToTopBtn = document.querySelector(".scroll-btn");

window.onscroll = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

function scrollToSection() {
    document.querySelector("#start").scrollIntoView({
        behavior: "smooth" 
    });
}