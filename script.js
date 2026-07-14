const buttons = document.querySelectorAll(".nav-buttons a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "home";

    sections.forEach(function (section) {

        if (window.scrollY >= section.offsetTop - 130) {
            currentSection = section.id;
        }

    });

    buttons.forEach(function (button) {

        button.classList.remove("active");

        if (button.getAttribute("href") === "#" + currentSection) {
            button.classList.add("active");
        }

    });

});