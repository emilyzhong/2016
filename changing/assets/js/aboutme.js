$(document).ready(function() {
	$(function() {
  		$('#container').smoothState();
	});

	window.onload = function() {
		$("#left").addClass("leftShift");
		$("#right").addClass("rightShift");
		$("#me-picture").addClass("fadeIn");
		$(".title").addClass("fadeOut");
		$(".lo").addClass("blueShadow");
	}

	if ( $(window).width() > 991) {
		$("#left").click(function() {
			backtohome()
		})

		$("#right").click(function() {
			backtohome();
		})
	} else {
		$("#left").click(function() {
			backtohome();
		})
	}

	$(".aboutsection").click(function(event) {
		event.stopPropagation();
	})


	function backtohome() {
		$("#left").removeClass("leftShift");
		$("#right").removeClass("rightShift");
		$("#me-picture").removeClass("fadeIn");
		$(".title").removeClass("fadeOut");
		$(".lo").removeClass("blueShadow");

		$("#leftcolor").addClass("returnColor");
		$("#left").addClass("leftReturn");
		$("#right").addClass("rightReturn");
		$("#me-picture").addClass("fastFadeOut");
		$(".title").addClass("fastFadeIn");
		$(".lo").addClass("fastFadeOut");
		setTimeout(function() {window.location.href='index.html'}, 200);
	}

});