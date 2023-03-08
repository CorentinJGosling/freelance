var ebiact = document.getElementById("ebiact");
ebiact.addEventListener("click", () => {
  window.location.href = "https://ebiact-database.com/";
});
var esUtils = document.getElementById("esUtils");
esUtils.addEventListener("click", () => {
  window.location.href = "https://www.imardgroup.com/es.utils/";
});
var simba = document.getElementById("simba");
simba.addEventListener("click", () => {
  window.location.href = "https://simba-adhd.com/";
});
var bjcp = document.getElementById("bjcp");
bjcp.addEventListener("click", () => {
  window.location.href =
    "https://corentinjgosling.github.io/BJCP_2022_TOMTB_ASD/";
});
var jaacap = document.getElementById("jaacap");
jaacap.addEventListener("click", () => {
  window.location.href =
    "https://corentinjgosling.github.io/JAACAP_2022_SLEEP_ADHD/";
});

new Typed("#typed", {
  strings: ["scientific writing", "data analysis"],
  typeSpeed: 80,
  delaySpeed: 90,
  loop: true,
});

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

// NAVIGATION SCROLL
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

// HAMBURGER MENU

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

// EMAIL SENDER

function CheckMail() {
  var boxID = document.getElementById("form_id");
  var NameID = document.getElementById("fullName").value;
  var emailID = document.getElementById("email_id").value;
  var messID = document.getElementById("message").value;
  var budgetID = document.getElementById("budget_id").value;
  const fail = document.querySelector(".formFail");
  const succ = document.querySelector(".formSent");

  if (NameID == "" || emailID == "" || messID == "" || budgetID == "") {
    fail.style.display = "block";
    // succ.style.display = "none";
  } else {
    SendMail();
    boxID.style.display = "none";
    succ.style.display = "block";
    fail.style.display = "none";
  }
}
function SendMail() {
  var params = {
    title: document.getElementById("title").value,
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    budget_id: document.getElementById("budget_id").value,
  };
  emailjs
    .send("service_mhgccsp", "template_q68z7ym", params)
    .then(function (res) {
      if (res.status == 200) {
        // mess =
        //   "Your message has been sent! You will hear from us in the coming days.";
      } else {
        mess =
          "Your message has not been sent! Please send you inquiry directly by email at x@x.";
      }
      alert(mess);
    });
}

ScrollReveal().reveal(".member", {
  delay: 300,
  distance: "100%",
  origin: "right",
});
// ScrollReveal().reveal(".sec3col" { delay: 0 });
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
