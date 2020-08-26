$(document).ready(function () {
  $(".carousel").carousel({
    interval: 1000,
  });
});

const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

window.addEventListener("scroll", (e) => {
  const scrollY = e.currentTarget.scrollY;
  if (scrollY > 100) {
    navbar.classList.add("bg-light");
  } else {
    navbar.classList.remove("bg-light");
  }
});

$("#navbarSupportedContent").on("show.bs.collapse", () => {
  navbar.classList.add("bg-light");
});

$("#navbarSupportedContent").on("hide.bs.collapse", () => {
  navbar.classList.remove("bg-light");
});
