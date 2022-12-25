import { mainFan } from "./proect_modules/script";

// /* Раскомментировать для использования */
import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  //   // Optional parameters
  //   direction: "vertical",
  //   loop: true,

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //     //булеты

  //     clickable: true,

  //     // динамические булеты
  //     dynamicBullets: true,
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,

  //   // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    //   возможность перетаскивать ползунок
    draggable: true,
  },
  freeMode: true,

  //   //   авто прокрутка слайдов
  autoplay: {
    delay: 1000,
    // stop on last slide
    stopOnLastSlide: false,
    // отключение после монипуляций со слайдером
    disableOnIteraction: false,
  },
  //   скорость прокрутки

  speed: 900,

  //   // эфекты переключения слайдов
  //   // смена прозрачности
  //   effect: "fade",

  //   //   параметры к fade
  //   fadEffect: {
  //     // паралельная смена прозрачности
  //     crossFade: true,
  //   },
  //   брэйк поинтс по ширине экрана
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //     },
  //     480: {
  //       slidesPerView: 2,
  //     },
  //     992: {
  //       slidesPerView: 3,
  //     },
  //   },
});
mainFan();
// let city = [];

// const dataFromPromise = () => {
//   fetch(
//     "https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json"
//   )
//     .then((resp) => resp.json())
//     .then((data) => {
//       init(data);
//     });
// };

// function init(data) {
//   console.log(data);
// }

// dataFromPromise();
