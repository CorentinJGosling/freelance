var ebiact = document.getElementById("ebiact");
ebiact.addEventListener("click", () => {
  window.open("https://ebiact-database.com/", "_blank");
});
var esUtils = document.getElementById("esUtils");
esUtils.addEventListener("click", () => {
  window.open("https://www.imardgroup.com/es.utils/", "_blank");
});
var simba = document.getElementById("simba");
simba.addEventListener("click", () => {
  window.open("https://simba-adhd.com/", "_blank");
});
var bjcp = document.getElementById("bjcp");
bjcp.addEventListener("click", () => {
  window.open(
    "https://corentinjgosling.github.io/BJCP_2022_TOMTB_ASD/",
    "_blank"
  );
});
var jaacap = document.getElementById("jaacap");
jaacap.addEventListener("click", () => {
  window.open(
    "https://corentinjgosling.github.io/JAACAP_2022_SLEEP_ADHD/",
    "_blank"
  );
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
  (function () {
    emailjs.init("gGctp79z7vquwYjys");
  })();
  var params = {
    title: document.getElementById("title").value,
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    budget_id: document.getElementById("budget_id").value,
  };
  var serviceID = "service_mhgccsp";
  var templateID = "template_75wl6pe";
  emailjs.send(serviceID, templateID, params).then(function (res) {
    if (res.status == 200) {
      mess =
        "Your message has been sent! If we did not reply within the next few days, do not hesitate to contact us at auxilium-academics@gmail.com.";
    } else {
      mess =
        "Your message has not been sent! Please send you inquiry directly by email at auxilium-academics@gmail.com.";
    }
    alert(mess);
  });
}
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

function redirectToPage(page) {
  window.location.href = page;
}

var chartData = {
  barCircleWeb: [
    {
      index: 0.3,
      value: 29588490,
      fill: "#e35536",
      label: "Research methods",
    },
    {
      index: 0.4,
      value: 28317462,
      fill: "#eb836c",
      label: "Study design",
    },
    {
      index: 0.5,
      value: 27317462,
      fill: "#f2ac9c",
      label: "Data analysis",
    },
    {
      index: 0.6,
      value: 15317462,
      fill: "#f8d5cc",
      label: "Publication help",
    },
    { index: 0.7, value: 12317462, fill: "#fcebe7", label: "Grant proposal" },
    {
      index: 0.8,
      value: 10317462,
      fill: "#fff",
      label: "Website & app creation",
    },
    // { index: 0.9, value: 10317462, fill: "#e35536", label: "Yahoo! Health" },
  ],
};

function drawBarCircleChart(data, target, values, labels) {
  var w = 562,
    h = 562,
    size = data[0].value * 1.15,
    radius = 300,
    sectorWidth = 0.1,
    radScale = 25,
    sectorScale = 1.45,
    target = d3.select(target),
    valueText = d3.select(values),
    labelText = d3.select(labels);

  var arc = d3.svg
    .arc()
    .innerRadius(function (d, i) {
      return (d.index / sectorScale) * radius + radScale;
    })
    .outerRadius(function (d, i) {
      return (
        (d.index / sectorScale + sectorWidth / sectorScale) * radius + radScale
      );
    })
    .startAngle(Math.PI)
    .endAngle(function (d) {
      return Math.PI + (d.value / size) * 2 * Math.PI;
    });

  var path = target.selectAll("path").data(data);

  //TODO: seperate color and index from data object, make it a pain to update object order
  path
    .enter()
    .append("svg:path")
    .attr("fill", function (d, i) {
      return d.fill;
    })
    .attr("stroke", "#D1D3D4")
    .transition()
    .ease("elastic")
    .duration(1000)
    .delay(function (d, i) {
      return i * 200;
    })
    .attrTween("d", arcTween);

  labelText
    .selectAll("tspan")
    .data(data)
    .enter()
    .append("tspan")
    .attr({
      x: -50,
      y: function (d, i) {
        return 30 + i * 20;
      },
      "text-anchor": "start",
    })
    .text(function (d, i) {
      return data[i].label;
    });

  function arcTween(b) {
    var i = d3.interpolate({ value: 0 }, b);
    return function (t) {
      return arc(i(t));
    };
  }
}

// Animation Queue
setTimeout(function () {
  drawBarCircleChart(
    chartData.barCircleWeb,
    "#circleBar-web-chart",
    "#circleBar-web-values",
    "#circleBar-web-labels"
  );
}, 1000);

d3.select("#circleBar-web-icon")
  .transition()
  .delay(500)
  .duration(500)
  .attr("opacity", "1");
d3.select("#circleBar-web-text")
  .transition()
  .delay(750)
  .duration(500)
  .attr("opacity", "1");

d3.select("#circleBar-web-clipLabels")
  .transition()
  .delay(600)
  .duration(1250)
  .attr("height", "150");
