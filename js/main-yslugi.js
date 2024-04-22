/* авторизация */
const menu = document.querySelector(".popup");
const openmenu = document.querySelector(".vhod");
const closemenu = document.querySelector(".popup .x");

openmenu.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.add("activ");
});
closemenu.addEventListener("click", () => {
  menu.classList.remove("activ");
});

/* регистрация */
const menu2 = document.querySelector(".popup2");
const openmenu2 = document.querySelector(".open-registr");
const closemenu2 = document.querySelector(".popup2 .x");

openmenu2.addEventListener("click", (e) => {
  e.preventDefault();
  menu2.classList.add("activ");
});
closemenu2.addEventListener("click", () => {
  menu2.classList.remove("activ");
});

/* выпадающий список меню при 375px */
closeSubmenu.addEventListener("mouseleave", () => {
   subMenu.classList.remove("activeSubmenu");
 });
 