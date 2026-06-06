// JavaScript for smooth scrolling
document.querySelectorAll(".nav-links a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// JavaScript for Dark/Light Mode Toggle
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

// Check for saved theme preference, default to light
if (localStorage.getItem("theme") === "dark") {
    body.setAttribute("data-theme", "dark");
    darkModeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
} else {
    body.setAttribute("data-theme", "light");
    darkModeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
}

darkModeToggle.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "dark") {
        body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        darkModeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
    } else {
        body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        darkModeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
    }
});

// JavaScript for Contact Form Submission
const contactForm = document.querySelector(".contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Simulate form submission success
    formMessage.classList.remove("error");
    formMessage.classList.add("success");
    formMessage.textContent = "شكراً لك! تم استلام رسالتك بنجاح وسأتواصل معك قريباً.";
    formMessage.style.display = "block";

    // Clear the form fields after a short delay
    setTimeout(() => {
        contactForm.reset();
        formMessage.style.display = "none";
    }, 3000);
});

// JavaScript for Navbar smooth scroll for contact button
document.querySelector(".navbar .contact-btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth",
    });
});

// Optional: Add a simple mobile navigation toggle if needed (not explicitly requested but good for UX)
// const navToggle = document.createElement('button');
// navToggle.classList.add('nav-toggle');
// navToggle.innerHTML = '<i class="fas fa-bars"></i>';
// document.querySelector('.navbar .container').prepend(navToggle);

// navToggle.addEventListener('click', () => {
//     document.querySelector('.navbar .nav-links').classList.toggle('active');
// });
