document.addEventListener('DOMContentLoaded', function(){
  var scrollLinks = [
    { link: '#about-link', scrollTo: '#about' },
    { link: '#priorities-link', scrollTo: '#priorities' },
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
});
