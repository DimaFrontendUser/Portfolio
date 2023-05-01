//= components/jquery.js
//= components/choices.js
//= components/jquery.fancybox.js
//= components/mixitup.js
//= components/swiper-bundle.js

'use strict';


let burger = document.querySelector('.header__burger');
if (burger) {
  let menuBurger = document.querySelector('.menu');
  burger.addEventListener('click', function(e) {
    menuBurger.classList.toggle('_active');
    burger.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  });
}

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".lodgeGallery-slider2", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    270: {
        slidesPerView: 4,
    },
    800: {
        slidesPerView: 5,
    },
    1280: {
      slidesPerView: 6,
  },
},
});
var swiper2 = new Swiper(".lodgeGallery-slider", {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


let containerEl = document.querySelector('.reports__filter');
let mixer;

if (containerEl) {
    mixer = mixitup(containerEl, {
         load: {
             filter: '.one'
         }
    });
}


const element = document.querySelector('.js-choice1');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
});

const element2 = document.querySelector('.js-choice2');
const choices2 = new Choices(element2, {
  searchEnabled: false,
  itemSelectText: '',
});