// main.js

// Show scroll-up button
const scrollUpBtn = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollUpBtn.style.display = "flex";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

// Smooth scroll to top when clicking button
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  }); // [web:8]
});

// Fade-in on scroll using IntersectionObserver
const faders = document.querySelectorAll(".card, .gallery-item, .contact-form");

const options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, options);

faders.forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});
