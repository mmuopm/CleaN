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

/* выпадающий список услуг */
const yslugi = document.querySelector(".yslugi");
const yslugiSubMenu = document.querySelector(".yslugi-sub-menu");

yslugi.addEventListener("mouseover", () => {
  yslugiSubMenu.style.display = "flex";
});
yslugi.addEventListener("mouseout", () => {
  yslugi.addEventListener("mouseover", () => {
    yslugiSubMenu.style.display = "flex";
  });
  yslugiSubMenu.addEventListener("mouseleave", () => {
    yslugiSubMenu.style.display = "none";
  });
});
yslugiSubMenu.addEventListener("mouseover", () => {
  yslugiSubMenu.style.display = "flex";
});
yslugiSubMenu.addEventListener("mouseout", () => {
  yslugiSubMenu.style.display = "none";
});

/* выпадающий список меню при 375px */
/* const subMenu = document.querySelector(".sub-menu-375");
const openSubmenu = document.querySelector(".menu-375 .menu");
const closeSubmenu = document.querySelector(".menu-375 .menu");

openSubmenu.addEventListener("click", () => {
  subMenu.classList.add("activeSubmenu");
    subMenu.style.display = 'block';
});

closeSubmenu.addEventListener("click", () => {
  subMenu.classList.remove("activeSubmenu");
  subMenu.style.display = 'none';
});

const submenuLinks = document.querySelectorAll(".sub-menu-375-nav a");

submenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    subMenu.classList.remove("activeSubmenu");
    subMenu.style.display = "none";
    window.location.href = link.getAttribute("href"); // Переход по ссылке
  });
}); */

/* GPT */

const menu375 = document.querySelector(".menu-375");
const subMenu = document.querySelector(".sub-menu-375");

menu.addEventListener("click", () => {
  subMenu.classList.toggle("activeSubmenu");
});

const submenuLinks = document.querySelectorAll(".sub-menu-375-nav a");

submenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке
    subMenu.classList.remove("activeSubmenu"); // Скрываем подменю
    setTimeout(() => { // Задержка для эффекта скрытия
      subMenu.style.display = "none";
    }, 300); // 300ms (время анимации)
    window.location.href = link.getAttribute("href"); // Переход по ссылке
  });
});
