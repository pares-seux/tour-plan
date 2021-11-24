const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var myMap;
ymaps.ready(init);

function init () {
  myMap = new ymaps.Map('map', {
    center: [7.8907, 98.2946],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  });

var myGeoObject = new ymaps.GeoObject ({
    geometry: {
      type: "Point",
      coordinates: [7.890759, 98.294690]
    }
  });

 myMap.GeoObject.add(myGeoObject); 
};
