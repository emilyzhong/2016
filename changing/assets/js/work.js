$(document).ready(function() {

	$(function() {
  		$('#container').smoothState();
	});

	window.onload = function() {
		$(".work").fadeIn();
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

	$(".work").click(function(event) {
		event.stopPropagation();
	})


	function backtohome() {
		$("#left").removeClass("leftShift");
		$("#right").removeClass("rightShift");

		$("#rightcolor").addClass("returnColor");
		$("#left").addClass("leftReturn");
		$("#right").addClass("rightReturn");
		$(".title").addClass("fastFadeIn");
		$(".work").fadeOut();
		setTimeout(function() {window.location.href='index.html'}, 200);
	}

	$("#navbar").click(function(event){
		event.stopPropagation();
	});

	var notexpanded = true
	if ( $(window).width() > 991) {
		$(".overlay").hover(function() {
			$(this).animate({opacity: 0}, 300);
			var num = $(this).attr('class').split(' ')[1]
			$("." + num).fadeIn()
			console.log(num);
		}, function() {
			if (notexpanded) {
				$(".textgroup").css("display", "none");
				$(this).animate({opacity: 1}, 300);
				var num = $(this).attr('class').split(' ')[1]
			}
		});
	}


	$(".picturetile").click(function() {
		var link = $(this).children(':nth-child(3)').attr('href');
		window.location.href = link;
	})
	// $(".picturetile").click(function() {
	// 	$(".behance").fadeIn()
	// 	$(".textcontainer").fadeIn()
	// 	var num = $(this).children(':nth-child(1)').attr('class').split(' ')[1]
	// 	console.log(num);
	// 	var image = $(this).children(':nth-child(2)').attr('src')
	// 	var link = $(this).children(':nth-child(3)').attr('href')
	// 	console.log(link);
	// 	$("." + num).fadeIn();
	// 	$("#expandoverlay").fadeIn();
	// 	$("#expandedimage").append('<img id="expanded" src="' + image + '">');
	// 	if (link) {
	// 		$("#expanded").wrap('<a href="'+link+'" target="_blank"></a>');
	// 	}
	// 	var img = document.getElementById('expanded')
	// 	if (img.height < img.width) {
	// 		$(img).width($("#right").width() * 0.8);
	// 		if ($(img).height() > $("#right").height() * 0.8) {
	// 			$(img).height($("#right").height() * 0.8);
	// 			$(img).width("auto");
	// 		}
	// 	} else {
	// 		$(img).height($("#right").height() * 0.8);
	// 		if ($(img).width() > $("#right").width() * 0.8) {
	// 			$(img).width($("#right").width() * 0.8)
	// 			$(img).height("auto")
	// 		}
	// 	}
		
	// 	notexpanded = false
	// });

	// $("#expandoverlay").click(function() {
	// 	$("#expandedimage").empty();
	// 	$("#expandoverlay").fadeOut();
	// 	$(".textgroup").fadeOut();
	// 	if ($(window).width() <= 991) {
	// 		$(".textcontainer").fadeOut();
	// 	}
	// 	$(".behance").fadeOut()
	// 	$(".overlay").animate({opacity: 1}, 300);
	// 	event.stopPropagation();
	// 	notexpanded = true
	// })

	// $('#expandedimage').click(function(event){
 //    	event.stopPropagation();
 // 	});


});