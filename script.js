const paginationBullets = document.getElementsByClassName("bullet");
const sections = document.querySelectorAll(".section");

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

var verticalSwiper = new Swiper(".verticalSwiper", {
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
