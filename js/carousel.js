$(function() {
  $('#carousel').carouFredSel({
    width: 990,
		height: 300,
  	auto: true,
  	prev: '#prev',
  	next: '#next',
  	pagination: "#pager",
  	mousewheel: true,
    items: {
      visible: {
  			max: 2
			}
    },
  	swipe: {
  		onMouse: true,
  		onTouch: true
  	}
  });
});
