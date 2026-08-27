// ==========================================================
// MOBILE NAVIGATION
// ==========================================================

const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", isOpen);
});


// Close mobile menu after clicking a link
document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});


// ==========================================================
// SUBTLE SCROLL REVEAL
// ==========================================================

const revealTargets = document.querySelectorAll(
  `
  .feature-story,
  .event-card,
  .wide-story,
  .mini-story,
  .identity-hero,
  .profile-card,
  .comparison-card,
  .portrait-item,
  .stat-card,
  .action-item,
  .resource-column
  `
);

revealTargets.forEach((element) => {
  element.classList.add("reveal");
});


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08,
  }
);


revealTargets.forEach((element) => {
  observer.observe(element);
});