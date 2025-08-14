//-------------------------------------------
//VARIABLES
const sections = document.querySelectorAll("section");
const backToTopBtn = document.getElementById("backToTopBtn");

//-------------------------------------------
//EVENT LISTENERS
//sections movement
window.addEventListener("scroll", checkSections);

//back-to-top btn
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

//-------------------------------------------
//FUNCTIONS
checkSections();

function checkSections() {
    const triggerBottom = (window.innerHeight / 4) * 4;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });
}
