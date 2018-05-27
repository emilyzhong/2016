$(document).ready(function() {

	var homepage = true
    
    if ($(window).width() < 768) {
        window.location.replace("https://emilyzhong.github.io/mobile.html");
    }

	// hover effects on home page
	// 768 px for tablets, phones: no hover effect
	if ( $(window).width() > 768) {
		$("#left").hover(function() {
			if (homepage) {
				console.log("LEFT HOVER");
				$("#left .name").css("color", "white");
				$("#left .title").css("color", "white");
				$("#leftcolor").animate({width: '100%'}, 200);
			}
		}, function() {
			if (homepage) {
				$("#leftcolor").stop(true).animate({width: 0}, 200);
				$("#left .name").stop(true).css("color", "#323232");
				$("#left .title").stop(true).css("color", "#323232");
			}
		});

		$("#right").hover(function() {
			if (homepage) {
				$("#right .name").css("color", "white");
				$("#right .title").css("color", "white");
				$("#rightcolor").animate({width: '100%'}, 200);
			}
		}, function() {
			if (homepage) {
				$("#rightcolor").stop(true).animate({width: 0}, 200);
				$("#right .name").stop(true).css("color", "#323232");
				$("#right .title").stop(true).css("color", "#323232");
			}
		});
	}

	// CLICK EFFECTS ON HOME PAGE:
	//showing about section
	if ( $(window).width() > 768) {
		$("#left").click(function() {
			if (homepage) {
				$("#content").animate({opacity: 1}, 300);
				$("#left").animate({width: '70%'}, 300);
				$("#left .name").css("color", "white");
				$("#left .aboutsection").css("color", "white");
				$("#leftcolor").animate({width: '100%'}, 300);
				$("#right").animate({width: '30%'}, 300);
				$(".title").fadeOut();
				$(".aboutsection").fadeIn();
				homepage = false
			} else {
				backtohome()
			}
		})

		// showing work section
		$("#right").click(function() {
			if (homepage) {
				$("#content").animate({opacity: 1}, 300);
				$("#right").animate({width: '70%'}, 300);
				$("#right .name").css("color", "white");
				$("#rightcolor").animate({width: '100%'}, 300);
				$("#left").animate({width: '30%'}, 300);
				$(".title").fadeOut(); 
				$(".work").fadeIn();
				homepage = false;
			} else {
				backtohome();
			}
		})
	} else {
		$("#left").click(function() {
			if (homepage) {
				$("#content").animate({opacity: 1}, 300);
				$("#left").animate({width: '100%'}, 300);
				$(".name").fadeOut();
				$("#right").fadeOut();
				$("#left .aboutsection").css("color", "white");
				$("#leftcolor").animate({width: '100%'}, 300);
				$("#right").animate({width: '0%'}, 300);
				$(".title").fadeOut();
				$(".aboutsection").fadeIn();
				$("#left .mobilenav").fadeIn();
				console.log("mobile-left click")
				homepage = false
			} else {
				backtohome()
			}
		})

		// showing work section
		$("#right").click(function() {
			if (homepage) {
				$("#content").animate({opacity: 1}, 300);
				$("#right").animate({width: '100%'}, 300);
				$(".name").fadeOut();
				$("#rightcolor").animate({width: '100%'}, 300);
				$("#left").animate({width: '0%'}, 300);
				$(".title").fadeOut(); 
				$(".work").fadeIn();
				$("#left .mobilenav").fadeOut();
				$("#right .mobilenav").fadeIn();
				console.log("mobile-right click")
				homepage = false
			} else {
				backtohome()
			}
		})
	 }

		$('.aboutsection').click(function(event){
	    	event.stopPropagation();
	 	});

		$('.picturecontainer').click(function(event){
	    	event.stopPropagation();
	 	});

	 	$('.textcontainer').click(function(event){
	    	event.stopPropagation();
	 	});


	function backtohome() {
		$("#content").animate({opacity: 0.8}, 300);
		$(".aboutsection").fadeOut();
		$(".work").fadeOut();
		$(".title").fadeIn();
		$("#right").animate({width: '50%'}, 300);
		$("#left").animate({width: '50%'}, 300);
		$("#left").fadeIn()
		$("#right").fadeIn()
		$("#rightcolor").animate({width: 0}, 300);
		$("#leftcolor").animate({width: 0}, 300);
		$(".name").fadeIn();
		$(".name").css("color", "#323232");
		$(".title").css("color", "#323232");
		$(".mobilenav").fadeOut();
		homepage = true	
	}

	// WORK SECTION
	$("#art").click(function() {
		$("#art").css("color", "white");
		$("#design").css("color", "#323232");
		$("#cs").css("color", "#323232");
		$(".design").fadeOut();
		$(".cs").fadeOut();
		$(".art").fadeIn();
	});

	$("#design").click(function() {
		$("#design").css("color", "white");
		$("#art").css("color", "#323232");
		$("#cs").css("color", "#323232");

		$(".art").fadeOut();
		$(".cs").fadeOut();
		$(".design").fadeIn();
	});

	$("#cs").click(function() {
		$("#cs").css("color", "white");
		$("#design").css("color", "#323232");
		$("#art").css("color", "#323232");

		$(".art").fadeOut();
		$(".design").fadeOut();
		$(".cs").fadeIn();
	});

	$("#navbar").click(function(event){
		event.stopPropagation();
	});

	// IMAGES

	var notexpanded = true
	if ( $(window).width() > 768) {
		$(".overlay").hover(function() {
			$(this).animate({opacity: 0}, 300);
			var num = $(this).attr('class').split(' ')[1]
			$("." + num).fadeIn()
		}, function() {
			if (notexpanded) {
				$(".textgroup").css("display", "none");
				$(this).animate({opacity: 1}, 300);
				var num = $(this).attr('class').split(' ')[1]
			}
		});
	}


	$(".picturetile").click(function() {
		if ($(window).width() > 768) {
			$(".behance").fadeIn()
			$(".textcontainer").fadeIn()
		}
		var num = $(this).children(':nth-child(1)').attr('class').split(' ')[1]
		console.log(num);
		var image = $(this).children(':nth-child(2)').attr('src')
		var link = $(this).children(':nth-child(3)').attr('href')
		console.log(link);
		$("." + num).fadeIn();
		$("#expandoverlay").fadeIn();
		$("#expandedimage").append('<img id="expanded" src="' + image + '">');
		if (link) {
			$("#expanded").wrap('<a href="'+link+'" target="_blank"></a>');
		}
		var img = document.getElementById('expanded')
		if (img.height < img.width) {
			$(img).width($("#right").width() * 0.8);
			if ($(img).height() > $("#right").height() * 0.8) {
				$(img).height($("#right").height() * 0.8);
				$(img).width("auto");
			}
		} else {
			$(img).height($("#right").height() * 0.8);
			if ($(img).width() > $("#right").width() * 0.8) {
				$(img).width($("#right").width() * 0.8)
				$(img).height("auto")
			}
		}
		
		notexpanded = false
	});

	$("#expandoverlay").click(function() {
		$("#expandedimage").empty();
		$("#expandoverlay").fadeOut();
		$(".textgroup").fadeOut();
		if ($(window).width() <= 768) {
			$(".textcontainer").fadeOut();
		}
		$(".behance").fadeOut()
		$(".overlay").animate({opacity: 1}, 300);
		event.stopPropagation();
		notexpanded = true
	})

	$('#expandedimage').click(function(event){
    	event.stopPropagation();
 	});


});
