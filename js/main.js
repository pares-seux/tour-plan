const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});


const reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const newsLetter = document.getElementsByClassName('newsletter__parallax')[0];
var showsHeight = document.body.scrollHeight - window.innerHeight;
  


function moveBg(e) {
  var position = (window.pageYOffset/(showsHeight))*70;
  newsLetter.style.backgroundPositionY = position + '%';
};

document.addEventListener('scroll', moveBg);


