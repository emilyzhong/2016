$(document).ready(function() {
	/** TODO: Currently, all images are expected to be a 2:3 ratio using padding-top. 
	Create code that:

	1) Detects the height/width aspect ratio of the image.
	2) Sets padding-top value for the given image to that ratio.

	TODO: Currently, each time I create a new page, I need to change the
	footer of each existing projects page.
	Create code that autofills the footer section so I don't have to do it, 
	taking from an array or something.
	**/
	$(".section-image").click(function() {
		if (document.getElementById("lightbox")) {
			let image = $(this).children().attr("src")

			let newImage = image.substring(0, 14) + "lightbox-images/" + image.substring(14, image.length) 

			$("#lightbox-image img").attr("src", newImage)
			$("#lightbox").show();
			$("html, body, #pseudobody").css("overflow", "hidden");
		}
	})

	$("#overlay, #lightbox-image").click(function() {
		$("#lightbox").hide()
		$("html, body, #pseudobody").css("overflow", "scroll");
	})

	$("#lightbox-image img").click(function(e) {
		e.stopPropagation();
	})
})