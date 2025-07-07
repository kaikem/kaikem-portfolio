/*VARIABLES*/
const text = "I am Kaike M.";
const typingTarget = document.getElementById('typingText');
const typingDelay = 200;

/*FUNCTION*/
function typeText(text, target, delay){
    for(let i=0; i<text.length; i++){
        setTimeout(() => {
            target.textContent += text.charAt(i);
        }, delay*i);
    };
};

/*FUNCTION EXECUTION*/
document.addEventListener('DOMContentLoaded', typeText(text, typingTarget, typingDelay));