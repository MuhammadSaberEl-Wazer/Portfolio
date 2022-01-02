$(document).ready(function () {
  $(".main-slider").slick({
    autoplay: true,
    autoplaySpeed: 500,
    speed: 1000,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "8px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

/* Navbar tap */

/* Getting Elements */

var homeNav = document.getElementById("home-nav");
var aboutNav = document.getElementById("about-nav");
var portfolioNav = document.getElementById("portfolio-nav");
var skillsNav = document.getElementById("skills-nav");
var contactNav = document.getElementById("contact-nav");
var introNav = document.getElementById("intro-nav");
var navbarBrand = document.getElementById("navbar-brand");

navbarBrand.addEventListener("click", function () {
  $(".loader-wrapper").fadeIn("100", "swing");
  loading(300);
});

aboutNav.addEventListener("click", function () {
  $(".loader-wrapper").fadeIn("100", "swing");
  loading(300);
  addAbout();
});

portfolioNav.addEventListener("click", function () {
  $(".loader-wrapper").fadeIn("100", "swing");
  loading(300);
  addPortfolio();
});

skillsNav.addEventListener("click", function () {
  $(".loader-wrapper").fadeIn("100", "swing");
  loading(300);
  addSkills();
});

introNav.addEventListener("click", function () {
  $(".loader-wrapper").fadeIn("100", "swing");
  loading(300);
  addIntro();
});

contactNav.addEventListener("click", function () {
  $(".loader-wrapper").fadeIn("100", "swing");
  loading(300);
  addContact();
});

homeNav.addEventListener("click", function () {
  $(".loader-wrapper").fadeIn("100", "swing");
  loading(300);
  addHome();
});

/* Functions */

function addAbout() {
  homeNav.classList.remove("active");
  portfolioNav.classList.remove("active");
  skillsNav.classList.remove("active");
  introNav.classList.remove("active");
  contactNav.classList.remove("active");
  aboutNav.classList.add("active");
}

function addPortfolio() {
  homeNav.classList.remove("active");
  aboutNav.classList.remove("active");
  skillsNav.classList.remove("active");
  introNav.classList.remove("active");
  contactNav.classList.remove("active");
  portfolioNav.classList.add("active");
}

function addSkills() {
  aboutNav.classList.remove("active");
  portfolioNav.classList.remove("active");
  homeNav.classList.remove("active");
  introNav.classList.remove("active");
  contactNav.classList.remove("active");
  skillsNav.classList.add("active");
}

function addIntro() {
  aboutNav.classList.remove("active");
  portfolioNav.classList.remove("active");
  homeNav.classList.remove("active");
  contactNav.classList.remove("active");
  skillsNav.classList.remove("active");
  introNav.classList.add("active");
}

function addContact() {
  aboutNav.classList.remove("active");
  portfolioNav.classList.remove("active");
  homeNav.classList.remove("active");
  skillsNav.classList.remove("active");
  introNav.classList.remove("active");
  contactNav.classList.add("active");
}

function addHome() {
  aboutNav.classList.remove("active");
  portfolioNav.classList.remove("active");
  contactNav.classList.remove("active");
  skillsNav.classList.remove("active");
  introNav.classList.remove("active");
  homeNav.classList.add("active");
}

/* Active Tap */

$(document).on(
  "click",
  ".portfolio .portfolio-title .portfolio-title-lower .portfolio-nav ul li",
  function () {
    $(this).addClass("active-nav").siblings().removeClass("active-nav");
    if (this.innerHTML === "Landing") {
      $("#landing")
        .addClass("active-port")
        .siblings()
        .removeClass("active-port");
      console.log("1");
    } else if (this.innerHTML === "Apps") {
      $("#apps").addClass("active-port").siblings().removeClass("active-port");
      console.log("2");
    } else if (this.innerHTML === "Websites") {
      $("#full").addClass("active-port").siblings().removeClass("active-port");
      console.log("3");
    } else if (this.innerHTML === "Certificates") {
      $("#certificate")
        .addClass("active-port")
        .siblings()
        .removeClass("active-port");
      console.log("4");
    }
  }
);

/* Pausing Video */

$("#exampleModal-vid1").on("hidden.bs.modal", function (event) {
  $("#player")[0].pause();
});

/* Loader */

$(document).ready(function () {
  loading(400);
});

function loading(x) {
  setTimeout(function () {
    $(".loader-wrapper").fadeOut("slow", "linear");
  }, x);
}

/* End of Progress bar */
