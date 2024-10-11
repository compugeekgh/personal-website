// app.js

// DOM Elements
const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbarMenu");
const contactForm = document.getElementById("contactForm");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// Smooth scrolling for anchor links
const smoothScroll = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  window.scrollTo({
    top: targetElement.offsetTop - 60, // Adjust offset for header height
    behavior: "smooth",
  });
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", smoothScroll);
});

// Contact form validation
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    alert("All fields are required.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for reaching out! I'll get back to you soon.");
  contactForm.reset();
});

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Close menu on click outside (for mobile menu)
document.addEventListener("click", (event) => {
  if (!hamburger.contains(event.target) && !navbarMenu.contains(event.target)) {
    navbarMenu.classList.remove("active");
  }
});
