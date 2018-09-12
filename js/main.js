document.addEventListener('DOMContentLoaded', function(){
  hamburgerHandler();
  scrollHandler();
  priorityExpander();
});

function scrollHandler() {
  var scrollLinks = [
    { link: '.about-link', scrollTo: '#about' },
    { link: '.priorities-link', scrollTo: '#priorities' },
    { link: '.faq-link', scrollTo: '#faq' },
    { link: '.contact-link', scrollTo: '#contact' },
  ]

  scrollLinks.forEach(function(scrollLink){
    var links = document.querySelectorAll(scrollLink.link);
    links.forEach(function(link) {
      link.addEventListener('click', function(e){
        e.preventDefault();
        var mobileMenu = document.querySelector('.mobile-menu');

        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }

        document.querySelector(scrollLink.scrollTo).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });
}

function priorityExpander() {
  var headers = document.querySelectorAll('.priority-header');

  headers.forEach(function(header) {
    header.addEventListener('click', function(e) {
      var contentDiv = header.parentElement.querySelector('.priority-item');
      var arrow = header.querySelector('.fas');

      arrow.classList.toggle("fa-angle-down");
      arrow.classList.toggle("fa-angle-up");
      contentDiv.classList.toggle("hidden");
    })
  });
}

function hamburgerHandler() {
  var hamburger = document.querySelector('.hamburger a');
  hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle("hidden");
  })
}
