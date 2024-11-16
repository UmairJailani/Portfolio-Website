const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add("active");
    }
  });
};

const main = () => {
  const articles = Array.from(document.querySelectorAll("article"));

  articles.forEach((article, index) => {
    setTimeout(() => {
      article.classList.add("reveal");
    }, index * 250);
  });
};
document.addEventListener("DOMContentLoaded", main);

const navbar = document.getElementById("navbar");

let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("hidden"); // Hide on scroll down
  } else {
    navbar.classList.remove("hidden"); // Show on scroll up
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
