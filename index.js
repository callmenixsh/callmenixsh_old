// typing animation for start
const roles = [
    "Web Developer", 
    "Graphic Designer", 
    "Video Editor", 
    "Programmer"
];

let roleIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector('.typing');
const typingSpeed = 50;
const deletingSpeed = 20;
const delayBetweenRoles = 1000;
const initialDelay = 1000;

function type() {
    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, delayBetweenRoles);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(type, initialDelay);
});

//scroll button
const scrollToAbtBtn = document.getElementById('scrollToAbout');
function scrollToAbt() {
    window.scrollTo({
        top: 900,
        behavior: 'smooth'
    });
}

