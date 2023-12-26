
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');





burger.addEventListener('click', () => {
  rightNav.classList.toggle('v-class-resp');
  navList.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');


});

/*------------Show more -------*/

let more = document.querySelectorAll('.more');
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function () {
    more[i].parentNode.classList.toggle('active')
  })
}


/*--------section5-----*/


let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 10;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


/*---------Crousel-------*/
// Initialization for ES Users


(function ($) {

  "use strict";

  // COUNTER NUMBERS
  jQuery('.counter-thumb').appear(function () {
    jQuery('.counter-number').countTo();
  });

  // CUSTOM LINK
  $('.smoothscroll').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

})(window.jQuery);


/*---------FAQ-------*/
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));