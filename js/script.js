//-------------------------------------------
//VARIABLES
const text = "Kaike M.";
const typingTarget = document.getElementById("typingText");
const typingDelay = 200;

//-------------------------------------------
//FUNCTIONS
/*
function typeText(text, target, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            target.textContent += text.charAt(i);
        }, delay * i);
    }
}
document.addEventListener("DOMContentLoaded", typeText(text, typingTarget, typingDelay));
*/

//-------------------------------------------
//REPLACE TEXT
const replaceableWord = document.querySelector(".replace-me");

if (replaceableWord !== null) {
    const replaceObject = new ReplaceMe(replaceableWord, {
        animation: "animated fadeIn",
        speed: 2000,
        separator: ",",
        loopCount: "infinite",
        autoRun: true,
    });
}
