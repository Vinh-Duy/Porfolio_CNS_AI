// Navbar scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

function toggleMenu() {
    const isOpen = hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
    navOverlay.classList.toggle("open");
    document.body.style.overflow = isOpen ? "hidden" : "";
}

hamburger.addEventListener("click", toggleMenu);

// Close menu on link click
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            toggleMenu();
        }
    });
});

// Close menu on overlay click
navOverlay.addEventListener("click", toggleMenu);

// Close menu on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
        toggleMenu();
    }
});

// Custom cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;
window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx - 4 + "px";
    cursor.style.top = my - 4 + "px";
});
(function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx - 18 + "px";
    ring.style.top = ry - 18 + "px";
    requestAnimationFrame(animRing);
})();
document.querySelectorAll("a, button, .conclusion-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(2.5)";
        ring.style.opacity = "0";
    });
    el.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        ring.style.opacity = "0.5";
    });
});

// Scroll reveal
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Click whole card → File PDF
const docUrls = [
    "programs/week1.pdf", // Tuần 1
    "programs/week2.pdf", // Tuần 2
    "programs/week3.pdf", // Tuần 3
    "programs/week4.pdf", // Tuần 4
    "programs/week5.pdf", // Tuần 5
    "programs/week6.pdf", // Tuần 6
];
document.querySelectorAll(".program-card").forEach((card, i) => {
    card.addEventListener("click", () => {
        window.open(docUrls[i], "_blank");
    });
    card.style.cursor = "pointer";
});
