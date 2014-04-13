$(function() {
  $('#carousel').carouFredSel({
    width: 990,
		height: 300,
  	auto: true,
  	prev: '#prev',
  	next: '#next',
  	pagination: "#pager",
    items: {
      visible: {
        min: 2,
  			max: 2
			}
    },
  	swipe: {
  		onMouse: true,
  		onTouch: true
  	},
    auto: {
      timeoutDuration: 10000
    }
  });
});
