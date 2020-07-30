$(document).ready(function() {
	var delaytime = 9000,
		revapi = $('.tp-banner').revolution({
	        sliderType: "standard",
	        delay: delaytime,
	        startwidth: 960,
	        startheight: 450,
	        thumbWidth: 100,
	        thumbHeight: 47,
	        thumbAmount: 3,

	        navigationType: "none", // use none, bullet or thumb
	        navigationArrows: "solo", // nexttobullets, solo (old name verticalcentered), none
	        navigationStyle: "round", // round, square, navbar, round-old, square-old, navbar-old
	        navigationHAlign: "center", // left,center,right
	        navigationVAlign: "center", // top,center,bottom
	        navigationHOffset: 0, // offset position from aligned position
	        navigationVOffset: 0, // offset position from aligned position

	        soloArrowLeftHalign: "left", // left,center,right
	        soloArrowLeftValign: "center", // top,center,bottom
	        soloArrowLeftHOffset: 0, // offset position from aligned position
	        soloArrowLeftVOffset: 0, // offset position from aligned position
	        soloArrowRightHalign: "right", // left,center,right
	        soloArrowRightValign: "center", // top,center,bottom
	        soloArrowRightHOffset: 0, // offset position from aligned position
	        soloArrowRightVOffset: 0, // offset position from aligned position
	        touchenabled: "false",
	        onHoverStop: "on"
	    });

	revapi.bind("revolution.slide.onchange", function (e, data) {
		var target = data.slide.find(".opa-custom"),
			opafrom = target.data("opafrom"),
			opato = target.data("opato"),
			delay = target.data("opadelay");

		target.css('opacity', opafrom);
		setTimeout(function(){
			target.animate({
			    opacity: opato
			  }, 2000);
		}, delay);
	});
});