$(document).ready(function() {

	// CONSTANTS
	let footerLinks = {
		"User Experience Design": {
			"Nutrition Label": "nutrition_label",
		},
		"Graphic Design": {
			"Geofilters": "geofilters",
			"Logo Design": "logos",
			"Daily Cal Design": "daily_cal_design",
		},
		"Programming": {
			"Where We Cry": "where_we_cry",
		},
		// "Fine Art": {

		// }
	};


	// IMAGE RESIZING THINGS

	$('.section-image').each(function() {
		let image = $(this).children("img");
	    let height = image.height();
	    let width = image.width();

	    let aspectRatio = height / width * 100;

	    if (aspectRatio) {
	    	$(this).css("padding-top", aspectRatio + "%");
	    }
	});


	// FOOTER

	// Hacky column things hahaha
	// 2 categories per column.
	let newColumn = true;
	let divString = '';

	Object.keys(footerLinks).forEach(function(category) {
		
		// HARDCODED FOR NUTRITION LABEL, remove when theres more ux projects.
		// this is pretty disgusting im so sorry
		if ($("#title").text() == "Nutrition Label" && category == "User Experience Design") {
			return;
		}

		if (newColumn) {
			divString += '<div class="column">'
		}

		divString = divString + '<div class="project-category">' + category + '</div>';

		Object.keys(footerLinks[category]).forEach(function(pageTitle) {
			// Ensure that current page isn't included.
			if (pageTitle == $("#title").text()) {
				return;
			} 

			let link = footerLinks[category][pageTitle];
			divString = divString + '<a href="' + link + '">' + pageTitle + '</a>';
		})

		if (!newColumn) {
			divString += '</div>' // Close column div.
			$("#footer-projects").append(divString);
			divString = '';
		}

		newColumn = !newColumn;
	})


	// LIGHTBOX

	$(".section-image").click(function() {
		if (document.getElementById("lightbox")) {
			let image = $(this).children().attr("src")

			let newImage = image.substring(0, 14) + "lightbox-images/" + image.substring(14, image.length) 

			$("#lightbox-image img").attr("src", newImage)
			$("#lightbox").attr("style", "display: block");
			$("html, body, #pseudobody").css("overflow", "hidden");
		}
	})

	$("#overlay, #lightbox-image").click(function() {
		// For some reason if I just change the CSS properties
		// (overflow specifically) the footer won't work ... weird.
		$("#lightbox").removeAttr("style");
		$("html, body, #pseudobody").removeAttr("style"); 
	})

	$("#lightbox-image img").click(function(e) {
		e.stopPropagation();
	})

	// WAYPOINTS
	$("#footer").waypoint({
		handler: function() {
			$("#footer").css("height", "80vh");
			setTimeout(function() {
				$("#footer-container").css("opacity", 1);
			}, 600)
		},
		offset: '80%'
	})

	$(".section-image").waypoint({
		handler: function() {
		$(this).find('img')
				.css({'top': '50%', 
					'left': '50%',
					'transform': 'scale(1) translate(-50%, -50%)',
					'opacity': 1
				})
		},
		offset: '70%'
	})
})