const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-solid');
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
//Typewriter Effect

const texts = [
    "Web Developer",
    "Graphic Designer",
    "Degen Trader"
];

let speed = 100;
const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if(charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000);  //Wait Before Erasing
    }
}

function eraseText() {
    if(textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex =(textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);  //Start Typing Next Word
    }
}

window.onload = typeWriter;

//For Adding Animations
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link, index) => {
        setTimeout (() => {
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
        }, index * 300); //Staggered Delay
    });
});
