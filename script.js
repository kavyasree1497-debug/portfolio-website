// =========================
// TYPING ANIMATION
// =========================

const roles = [
    "ECE Student",
    "Java Developer",
    "SQL Enthusiast",
    "Future Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    const typingElement = document.querySelector(".typing");

    if (!typingElement) return;

    if (!isDeleting) {
        currentText = roles[roleIndex].substring(0, charIndex + 1);
        charIndex++;

    } else {
        currentText = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
    }

    typingElement.textContent = currentText;

    let speed = isDeleting ? 80 : 150;

    if (!isDeleting && charIndex === roles[roleIndex].length) {
        speed = 1500;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
    ".section, .card, .skill-card, .project-card"
);

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href").includes(current)
        ) {
            link.classList.add("active");
        }

    });

});


// =========================
// HERO IMAGE FLOAT EFFECT
// =========================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    setInterval(() => {

        heroImage.style.transform =
            "translateY(-10px)";

        setTimeout(() => {

            heroImage.style.transform =
                "translateY(0px)";

        }, 1000);

    }, 2000);
}


// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#8b5cf6;
color:white;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "Portfolio Designed by Kavya Sree Mangala 🚀"
);