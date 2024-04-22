const slides = document.querySelectorAll(".reviews-slide");
const slider = document.querySelector(".reviews-sliders");
const arrowLeft = document.querySelector(".prev");
const arrowRight = document.querySelector(".next");
const dottsContainer = document.querySelector(".dotts");

let currentSlideIndex = 0;
/* const sliderWidth = slider.clientWidth; */

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  /* slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`; */
  updateDotts();
}

function updateDotts() {
  dottsContainer.innerHTML = "";
  slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
      currentSlideIndex = index;
      showSlide();
    });
    if (index === currentSlideIndex) {
      dot.classList.add("active");
    }
    dottsContainer.appendChild(dot);
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide();
}

function previousSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide();
}

showSlide();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

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
