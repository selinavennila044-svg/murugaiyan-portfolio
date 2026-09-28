/* =================================
   MOBILE NAVIGATION
================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =================================
   CLOSE MENU AFTER CLICKING LINK
================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =================================
   CONTACT FORM
================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name !== "" && email !== "" && message !== "") {

        formMessage.textContent =
            "Thank you, " + name + "! Your message has been received.";

        // Clear form
        contactForm.reset();

    } else {

        formMessage.textContent =
            "Please fill in all the fields.";

    }

});


/* =================================
   SIMPLE SCROLL EFFECT
================================= */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0, 0, 0, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});