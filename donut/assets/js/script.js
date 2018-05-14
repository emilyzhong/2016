$(document).ready(function() {
	const WINDOW_HEIGHT = $(window).height();
	const DOCUMENT_HEIGHT = $(document).height();
	const NUM_SECTIONS = SECTIONS.length;
	const TOTAL_OFFSET = 1300;
	const delay = 200;
	const navItems = $(".nav-item");
	const colorThief = new ColorThief();

	let lastClick = 0;
	let changeContentEnabled = true;
	let currentOffset = 0;
	let currIndex = null;

	// setTimeout(function() {
	// 	$("#loading-svg").fadeOut();
	// 	$("main").fadeIn();
	// }, 3000);

	$("body").css("height", (NUM_SECTIONS + 1) * 100 + "vh");
	changeContent();
	$(window).scroll(function() {
		if (changeContentEnabled) {
			changeContent();
		}
	})

	$(".nav-item").click(function() {
		changeContentEnabled = false;
		let navIndex = navItems.index(this);

		$("#circle").css("stroke-dashoffset", 0);
		$("#circle").animate({"stroke-dashoffset": -1300 + "px"}, 1000);

		if (mod(navIndex, 2) == 1) {
			// automatically calls changeContent
			$(window).scrollTop((navIndex + 1) * WINDOW_HEIGHT);
		} else {
			// automatically calls changeContent
			$(window).scrollTop((navIndex) * WINDOW_HEIGHT + 1);
		}

		changeContentEnabled = true;
	})

	$(".nav-item").hover(function() {
		let navIndex = navItems.index(this);
		$(this).prepend("<div class='nav-item-label'>" + SECTIONS[navIndex].title + "</div>");
	}, function() {
		$(this).find("div").remove();
	})

	function changeContent(i=null) {
		currPosition = $(window).scrollTop();
		let percentageOfStroke = 1 - currPosition / WINDOW_HEIGHT;
		currentOffset = TOTAL_OFFSET * percentageOfStroke;
		$("#circle").css("stroke-dashoffset", currentOffset + "px");

		prevIndex = currIndex;
		
		if (i != null) {
			currIndex = i;
		} else {
			currIndex = Math.min(Math.max(-1 * Math.floor(percentageOfStroke), 0), NUM_SECTIONS - 1);
		}

		if (prevIndex != currIndex) {
			$(".nav-item:eq(" + prevIndex + ")").removeClass("selected-nav");
			$(".nav-item:eq(" + currIndex + ")").addClass("selected-nav");

			sectionInfo = SECTIONS[currIndex];

			if (lastClick >= (Date.now() - delay)) {
				$("#donut-image").attr("src", sectionInfo.imageSrc);
				$("#text *").stop().fadeOut();
				$("#title").html(sectionInfo.title);
				$("#description").html(sectionInfo.description);
			    return;
			} else {
				lastClick = Date.now();

				$("#donut-image").stop().fadeOut('fast', function() {
					$("#donut-image").attr("src", sectionInfo.imageSrc);
					$("#donut-image").on('load', function() {
						let image = new Image();
						image.crossOrigin = "Anonymous"
						image.src = sectionInfo.imageSrc;
						image.onload = function() {
							setColors(image);
						};
					})
				}).fadeIn('fast');

				$("#text").removeClass("move-up");
				$("#text *").stop().fadeOut(400, function() {
					$("#title").html(sectionInfo.title);
					$("#description").html(sectionInfo.description);
					$("#text").addClass("move-up");
				}).fadeIn(400);
			}
		}
	}

	function mod(n, m) {
	  return ((n % m) + m) % m;
	}

	function setColors(image) {
		$("#text a").css("color", colorThief.getColor(image));
	}
});