$(document).ready(function () {
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
  autoHeight: true,
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

};

document.addEventListener('scroll', moveBg);

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function() {
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
}, {passive: true});

  var modalButton = $('[data-toggle=modal]');
  modalButton.on('click', openModal);
  var closeModalButton = $('.modal__close');
  closeModalButton.on('click', closeModal);
  var modalWindow = $('.modal__overlay');
  modalWindow.on('click', function(event) {
    closeModal(event);
  });

  $(document).keyup(function(event) {
     if (event.key === "Escape") { 
       closeModal(event);
    }
  });

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };

  //обработка форм
  $(".form").each( function() {
    if($(this).hasClass('subscribe')) {
      $(this).validate({
        errorLabelContainer: $('.subscribe__label-container'),
        messages: {
          email: {
            required: 'This field is required*',
            email: 'Valid email format name@hostname*'
          },
        },
    });
    };
    $(this).validate({
      messages: {
        name: {
          required: 'This field is required*',
          name: 'The string length must not be less than 2 characters*'
        },
        phone: {
          required: 'This field is required*',
          minlength:  'Valid phone format +7 (XXX) XXX-XX-XX*'
        },
        email: {
          required: 'This field is required*',
          email: 'Valid email format name@hostname'
        },
      },
    });
  });

  AOS.init();
});