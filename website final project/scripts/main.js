/*const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});*/

// Responsive Menu
function toggleMenu() {
  document.getElementById("primary-nav").classList.toggle("open");
  document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById("hamburger-button");

x.onclick = toggleMenu;
