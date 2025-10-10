const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

  const title = document.querySelector('.dropdown-title');
const content = document.querySelector('.dropdown-content');

title.addEventListener('click', () => {
  content.classList.toggle('show');
});



console.log("Script loaded!");

