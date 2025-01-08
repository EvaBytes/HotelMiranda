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
