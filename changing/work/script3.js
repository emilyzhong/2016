$(document).ready(function(){
	var start = false;
	// setTimeout(function() {
	// 	$("#cover").fadeOut();
	// 	start=true
	// }, 3000)

	// TURN THE THING
	var pause = 50;
	var degrees = 0;
	var opacity = 1;
	$(".text.two, .text.three, .text.four").css({
		'display': 'none'
	});
	$(".dot#1").addClass("fill-color");

	var repeat = true;

	function bobbleBack() {
		console.log("HA");
		$({deg: 3}).animate({deg: 0}, {
	        duration: 1000,
	        step: function(now) {
	            // in the step-callback (that is fired each step of the animation),
	            // you can use the `now` paramter which contains the current
	            // animation-position (`0` up to `angle`)
	            $("#right").css({
	                transform: 'rotate(' + (degrees + now) % 360 + 'deg)'
	            });
	        },
	        // complete: function() { if(repeat) {bobble();}}
		});
	}

	function bobble() {
		console.log("AH");
		repeat = true;
		$({deg: 0}).animate({deg: 3}, {
	        duration: 1000,
	        step: function(now) {
	            // in the step-callback (that is fired each step of the animation),
	            // you can use the `now` paramter which contains the current
	            // animation-position (`0` up to `angle`)
	            $("#right").css({
	                transform: 'rotate(' + (degrees + now) % 270  + 'deg)'
	            });
	        },
	        complete: function() { bobbleBack();}
	    });
	}

	$("#titlething").hover(function() {
		repeat = true;
		bobble();
	}, function() {
		repeat = false;
	});

	// setTimeout(function() {bobble()}, 3000);
	
	$(window).on('wheel', function() {
		// if ($("#cover").css("display") == "none") {
			repeat = false;
			if (degrees > 268) {
				$(".text.two, .text.three, .text.four").css({
				'display': 'none',
				'opacity': 1
				});
			}

			if (degrees % 90 == 0) {
				pause += 1;
				opacity = 1;
			}

			if (pause > 35) {
				pause = 0;
				opacity = 1;
			}

			if (degrees == 88.5) {
				$(".text.one").css({'display': 'none'});
				$(".text.two").fadeIn();
				$(".dot#1").removeClass("fill-color");
				$(".dot#2").addClass("fill-color");
				}

			if (degrees == 178.5) {
				$(".text.two").css({'display': 'none'});
				$(".text.three").fadeIn();
				$(".dot#2").removeClass("fill-color");
				$(".dot#3").addClass("fill-color");
				$(".down").fadeOut();
				$(".himage.one").fadeOut();
				$(".image.one").fadeOut();
			}

			if (degrees > 265) {
				$(".text.three").css({'display': 'none'});
				$(".text.one").css({'display': 'block'});
				$(".text.one").css({'opacity': (degrees - 260) / 10});;
				$(".dot#3").removeClass("fill-color");
				$(".dot#1").addClass("fill-color");
				$(".down").fadeIn();
				$(".himage.one").fadeIn();
				$(".image.one").fadeIn();
			}

			// if (degrees > 350) {
			// 	$(".text.four").css({'display': 'none'});
				
			// 	$(".dot#4").removeClass("fill-color");
			// 	$(".dot#1").addClass("fill-color");
			// 	$(".down").show();
			// }

			if (pause == 0) {
				degrees += 1.5;
				degrees = degrees % 270;
				opacity -= 1/50;
				$("#right").css({
		        'transform': 'rotate(' + (degrees) + 'deg)'
				});

				// opacity decreasing here!
				if (degrees < 90 && degrees > 0) {
					$(".text.one").css({
						'opacity': opacity
					})
				} else if (degrees < 180 && degrees > 90) {
					$(".text.two").css({
						'opacity': opacity
					})
				} else if (degrees < 270 && degrees > 180) {
					$(".text.three").css({
						'opacity': opacity
					})
				} 
			}
			repeat = true;
		// }
	});

	// GO BACK: CLICK ON NAME
	$(".name").click(function() {
		window.location.href="../design.html"
	})
});