//-------------------------------------------
//VARIABLES
const sections = document.querySelectorAll("section");

//-------------------------------------------
//EVENT LISTENERS
window.addEventListener("scroll", checkSections);

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
