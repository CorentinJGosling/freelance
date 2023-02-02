// SELECT CAROUSEL
const carousel = document.querySelector(".carousel");

// SELECT NEXT BUTTON
const nextButton = document.querySelector(".right-btn");

// SELECT LEFT BUTTON
const previousButton = document.querySelector(".left-btn");

// SELECT THE NAV
const nav = document.querySelector(".nav");

// SELECT THE TEXT
const explain = document.querySelector(".explain");

// SELECT ALL THE EXPLANATIONS
const expTxt = [...explain.children];

// SELECT ALL THE DOTS
const dots = [...nav.children];

// SELECT ALL THE SLIDES INSIDE THE CAROUSEL
const slides = [...carousel.children];

// CALCULATE THE SLIDE WIDTH
let slideWidth = slides[0].getBoundingClientRect().width;

// POSITION THE SLIDES HORIZONTALY
function positionSlides(slides) {
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.left = slideWidth * index + "px";
  }
}

positionSlides(slides);

// ON RIGHT BUTTON CLICK, WE MOVE(TranslateX) THE CAROUSEL TO THE LEFT
nextButton.addEventListener("click", function () {
  const currentSlide = carousel.querySelector(".active");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(carousel, currentSlide, nextSlide);
  hideButton(nextSlide, slides);
  moveToDot(nextSlide, slides, nav, dots);
  moveToTxT(nextSlide, slides, explain, expTxt);
});

// ON LEFT BUTTON CLICK, WE MOVE(TranslateX) THE CAROUSEL TO THE RIGHT
previousButton.addEventListener("click", function () {
  const currentSlide = carousel.querySelector(".active");
  const previousSlide = currentSlide.previousElementSibling;

  moveToSlide(carousel, currentSlide, previousSlide);
  hideButton(previousSlide, slides);
  moveToDot(previousSlide, slides, nav, dots);
  moveToTxT(previousSlide, slides, explain, expTxt);
});

// ON DOT CLICK
nav.addEventListener("click", function (e) {
  // if we didn't click on a dot, we exit
  if (e.target === nav) return;

  // SELECT THE CLICKED DOT
  const targetDot = e.target;

  // SELECT THE CURRENT DOT
  const currentDot = nav.querySelector(".active");

  // SELECT THE CURRENT SLIDE
  const currentSlide = carousel.querySelector(".active");

  // SELECT THE CURRENT Txt
  const currentTxt = explain.querySelector(".active");

  // find the index of the dot, so we can target the right slide
  let targetDotIndex = findIndex(targetDot, dots);

  // SELECT THE TARGET SLIDE
  const targetSlide = slides[targetDotIndex];

  moveToSlide(carousel, currentSlide, targetSlide);
  toggleActive(currentDot, targetDot);
  moveToTxT(targetSlide, slides, explain, expTxt);
  hideButton(targetSlide, slides);
});

// MOVE TO DOT
function moveToDot(targetSlide, slides, nav, dots) {
  let slideIndex = findIndex(targetSlide, slides);
  const currentDot = nav.querySelector(".active");
  const targetDot = dots[slideIndex];
  toggleActive(currentDot, targetDot);
}
// MOVE TO TXT
function moveToTxT(targetSlide, slides, explain, expTxt) {
  let slideIndexTxT = findIndex(targetSlide, slides);
  const currentTxt = explain.querySelector(".active");
  const targetTxt = expTxt[slideIndexTxT];
  toggleActive(currentTxt, targetTxt);
}
// MOVE TO SLIDE
function moveToSlide(carousel, currentSlide, targetSlide) {
  const position = targetSlide.style.left;
  carousel.style.transform = `translateX(-${position})`;
  toggleActive(currentSlide, targetSlide);
}

// Toggle ACTIVE CLASS
function toggleActive(current, target) {
  current.classList.remove("active");
  target.classList.add("active");
}

// HIDE BUTTON
function hideButton(targetSlide, slides) {
  // If the target slide is the first slide the previous button must be hidden
  // and the next button must be shown
  if (targetSlide === slides[0]) {
    previousButton.classList.add("hide");
    nextButton.classList.remove("hide");
  } else if (targetSlide === slides[slides.length - 1]) {
    // If the target slide is the last slide the next button must be hidden
    // and the previous button must be shown
    nextButton.classList.add("hide");
    previousButton.classList.remove("hide");
  } else {
    // if none of the above is true, we show both the next and prevoius button
    previousButton.classList.remove("hide");
    nextButton.classList.remove("hide");
  }
}

// FIND THE INDEX OF AN ITEM, INSIDE AN ARRAY OF ITEMS
function findIndex(item, items) {
  for (let index = 0; index < items.length; index++) {
    if (item === items[index]) {
      return index;
    }
  }
}

let modalBtn1 = document.getElementById("modal-btn1");
let modal1 = document.querySelector(".modal1");
let closeBtn1 = document.querySelector(".close-btn1");
modalBtn1.onclick = function () {
  modal1.style.display = "block";
};
closeBtn1.onclick = function () {
  modal1.style.display = "none";
};
window.onclick = function (e) {
  if (e.target == modal1) {
    modal1.style.display = "none";
  }
};
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal1.style.display = "none";
  }
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navlist li");

window.onscroll = () => {
  var current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 260) {
      current = section.getAttribute("id");
      // logo.style.opacity = 1;
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

const menu = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
