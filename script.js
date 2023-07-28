const paginationBullets = document.getElementsByClassName("bullet");
const sections = document.querySelectorAll(".section");
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");

/* ========== Pagination ========== */
/* function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function setPagination() {
  for (let i = 0; i < sections.length; i++) {
    const isShown = isInViewport(sections[i]);
    if (isShown) {
      paginationBullets[i].classList.add("active");
    } else {
      if (paginationBullets[i].classList.contains("active")) {
        paginationBullets[i].classList.remove("active");
      }
    }
  }
  if (isInViewport(document.getElementById("header"))) {
    paginationBullets[0].classList.add("active");
  }
}
setPagination();
window.onscroll = setPagination; */

for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].addEventListener("click", () => {
    for (let j = 0; j < paginationBullets.length; j++) {
      if (paginationBullets[j].classList.contains("active")) {
        paginationBullets[j].classList.remove("active");
      }
      paginationBullets[i].classList.add("active");
    }
  });
}
menuButton.addEventListener("click", () => {
  menu.classList.add("active");
});
closeButton.addEventListener("click", () => {
  menu.classList.remove("active");
});

/* ========== Slider ========== */
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 20,
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

var verticalSwiper = new Swiper(".vertical-swiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 4,
    },
    950: {
      slidesPerView: 6,
    },
  },
});

/* var centeredSwiper = new Swiper(".centered-swiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  centeredSlides: true,
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    }
  },
}); */

/* ========== Form ========== */
window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form");
  var status = document.getElementById("status");

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Your form has been sent. Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Your form has not been submitted. Please try again.";
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
