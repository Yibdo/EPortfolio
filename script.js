// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Dropdown toggle for all dropdown sections
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const title = dropdown.querySelector('.dropdown-title');
  const content = dropdown.querySelector('.dropdown-content');

  // Start with dropdowns hidden (optional, depending on your CSS)
  content.style.display = 'none';

  title.addEventListener('click', () => {
    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block';
  });
});

