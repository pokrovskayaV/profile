//Кнопка переключения темы
const toggleBtn = document.querySelector(".header__button");
toggleBtn.addEventListener("click", function() {
  if (document.documentElement.hasAttribute("theme")) {
    document.documentElement.removeAttribute("theme");
    toggleBtn.textContent=('Темная тема');
  } else {
    document.documentElement.setAttribute("theme", "dark");
    toggleBtn.textContent=('Светлая тема');
  }
});
