document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");

        const img = hamburger.querySelector("img");
        if (mobileMenu.classList.contains("active")) {
            img.src = "assets/Close.png"; 
            img.alt = "Close Icon";
        } else {
            img.src = "assets/HamburgerMenu.png";
            img.alt = "Hamburger Menu";
        }
    });

    const hideNavBar = () => {
        let desktop = window.matchMedia('(min-width: 1000px)');

        if (desktop.matches) {
            if (window.scrollY > 90) {
                document.getElementsByClassName("nav")[0].classList.add("transition-top");
            } else {
                document.getElementsByClassName("nav")[0].classList.remove("transition-top");
            }
        }
    };

    window.addEventListener('scroll', hideNavBar);
});