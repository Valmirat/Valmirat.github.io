// Typing animation for hero text
const heroText = "Computer Science Graduate | Technical Support Specialist";
let i = 0;
const speed = 100; // ms

function typeWriter() {
if (i < heroText.length) {
document.querySelector(".hero p").innerHTML += heroText.charAt(i);
i++;
setTimeout(typeWriter, speed);
}
}

document.querySelector(".hero p").innerHTML = "";
window.onload = typeWriter;

// Initialize AOS animations
AOS.init({
duration: 1000,
once: true
});
