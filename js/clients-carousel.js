$(document).ready(function(){

  // находим блок со слайдами
  const owl = $('#clients-slider');
  // запускае мкарусель
  owl.owlCarousel({
    items: 1,
    loop: true
  })

  // находим кастомные кнопки вперед / назад
  const prev = $('#sliderPrev');
  const next = $('#sliderNext');

  // клик на кнопку назад и прокрутка карусели
  prev.click(function() {
    owl.trigger('prev.owl.carousel');
  })

   // клик на кнопку вперед и прокрутка карусели
  next.click(function() {
    owl.trigger('next.owl.carousel');
  })

});