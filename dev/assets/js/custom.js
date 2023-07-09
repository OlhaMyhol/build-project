$(document).ready(function() {

  $('.first-screen-slider').slick({
      dots: true,
      infinite: true,
      appendArrows: '.first-screen-slider__arrows',
      responsive: [{
              breakpoint: 991,
              settings: {
                  arrows: false,
              }
          },

      ]
  });

  mobileOnlySlider("#advantages-slider", true, false, 991);
  function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
      mobileFirst: true,
      dots: $dots,
      arrows: $arrows,
      responsive: [
      {
          breakpoint: $breakpoint,
          settings: "unslick"
      }
      ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
      if ($(window).width() > $breakpoint) {
      return;
      }
      if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
      }
  });
  } 
});


const checkbox = document.querySelectorAll('[type="checkbox"]')

checkbox.forEach(item => {
  item.closest('.input-box').classList.add('has-checkbox')
  item.closest('.input-column').classList.add('padding')
})

