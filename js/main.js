const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar_menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
