$(function() {

	// Custom JS
	
	// Menu Burger
	var menuBurger = $('.menuBurgerAnimate');
	menuBurger.on('click' , function () {
			menuBurger.toggleClass('active');
	});
	// End Menu Burger

	$('.slider').owlCarousel({
		items: 1,
		center: true,
		loop: true
	});


});
