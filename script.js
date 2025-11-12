// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Dropdown toggle (CSS handles animation)
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const title = dropdown.querySelector('.dropdown-title');
  
  title.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });
});