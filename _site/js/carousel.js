$(function() {
  $('#carousel').carouFredSel({
  	auto: true,
  	prev: '#prev',
  	next: '#next',
  	pagination: "#pager",
  	mousewheel: true,
  	swipe: {
  		onMouse: true,
  		onTouch: true
  	}
  });
});
