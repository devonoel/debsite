document.addEventListener('DOMContentLoaded', function(){
  scrollHandler();
  priorityExpander();
});

function scrollHandler() {
  var scrollLinks = [
    { link: '#about-link', scrollTo: '#about' },
    { link: '#priorities-link', scrollTo: '#priorities' },
    { link: '#faq-link', scrollTo: '#faq' },
    { link: '#contact-link', scrollTo: '#contact' },
  ]

  scrollLinks.forEach(function(scrollLink){
    document.querySelector(scrollLink.link).addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(scrollLink.scrollTo).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
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

      if (contentDiv.style.display === "block") {
        contentDiv.style.display = "none";
      } else {
        contentDiv.style.display = "block";
      }
    })
  });
}
