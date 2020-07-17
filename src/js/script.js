//Кнопка переключения темы
const toggleBtn = document.querySelector(".header__button");
toggleBtn.addEventListener("click", function() {
  if (document.documentElement.hasAttribute("theme")) {
    document.documentElement.removeAttribute("theme");
    toggleBtn.textContent = "Темная тема";
  } else {
    document.documentElement.setAttribute("theme", "dark");
    toggleBtn.textContent = "Светлая тема";
  }
});

const menu = document.querySelector(".header__item");
const subitems = document.querySelectorAll(".header__subitems");

if (document.body.clientWidth < 424) {
  menu.addEventListener("click", function() {
    console.log("click");
    subitems.forEach(item => item.classList.toggle("_active"));
  });
}
