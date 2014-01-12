var headerBottom = $( window ).height() - 100;

$(window).scroll(function(e) {
  var scrollPos = window.scrollY;
  if (scrollPos > headerBottom) {
    $('.top-button.hidden').removeClass('hidden');
  } else {
    $('.top-button:not(.hidden)').addClass('hidden');
  }
});

$(document).ready(function () {
  $('.top-button').on('click', function() {
    scrollToTop();
  });

  $("#about-link").on('click', function() {
     scrollToAnchor('#about');
  });

  $("#platform-link").on('click', function() {
     scrollToAnchor('#platform');
  });

  $("#contribute-link").on('click', function() {
     scrollToAnchor('#contribute');
  });

  $("#contact-link").on('click', function() {
     scrollToAnchor('#contact');
  });

});

function scrollToTop(callback) {
  $('html, body').animate({ scrollTop: '0' }, 200, callback);
}

function scrollToAnchor(tag, callback){
  $('html, body').animate({ scrollTop: $(tag).offset().top }, 200, callback);
}
