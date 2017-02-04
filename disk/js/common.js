$(document).ready(function() {

	// $(".nav_button").click(function() {
	// 	$(".nav_list").slideToggle({
	// 		duration: 800,
	// 		queue: false
	// 	});
	// });
	$('.nav_button').click(function () {
	  $(".nav_list").toggleClass('open');
	  	duration: 800
	});
	var owl = $(".main__slider_top");
	owl.owlCarousel({
		singleItem:true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".slider_next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".slider_prev_button").click(function(){
		owl.trigger("owl.prev");
	});
});