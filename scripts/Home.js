import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.menu__swiper', {
  modules: [Navigation], // Habilitar el módulo de navegación
  slidesPerView: 1, // Predeterminado: 1 imagen visible
  spaceBetween: 20, // Espacio entre las imágenes
  loop: true, // Slider infinito
  navigation: {
    nextEl: '#menu-next', // Botón siguiente personalizado
    prevEl: '#menu-prev', // Botón previo personalizado
  },
  breakpoints: {
    667: {
      slidesPerView: 3, // Tres imágenes visibles en pantallas medianas (tablets)
    },
    1000: {
      slidesPerView: 6, // Seis imágenes visibles en pantallas grandes (escritorio)
    },
  },
});
