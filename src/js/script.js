const menu = document.querySelector(".responsive-menu");
const headerul = document.querySelector(".responsive-menu-bar");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  headerul.classList.toggle("active");
});
