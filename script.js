// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Multiple dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const title = dropdown.querySelector('.dropdown-title');
  const content = dropdown.querySelector('.dropdown-content');

  title.addEventListener('click', () => {
    content.classList.toggle('show');
  });
});

