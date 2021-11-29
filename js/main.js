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
 

function moveBg(e) {
  newsLetterHeight = newsLetter.getBoundingClientRect().height;
  heightScroll = window.innerHeight + newsLetterHeight - 40;
  newsLetterTop = newsLetter.getBoundingClientRect().top;
  blockPosition = newsLetterTop + newsLetterHeight - 40;

  if ((newsLetterTop-window.innerHeight<=0) && (newsLetterTop+newsLetterHeight>=0)) {
    newsLetter.style.backgroundPositionY = ((60-0.6*100) + (blockPosition/heightScroll)*100*0.6) + '%'; }
    console.log(newsLetter.style.backgroundPositionY);

};

document.addEventListener('scroll', moveBg);


