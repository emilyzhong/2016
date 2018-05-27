$(document).ready(function() {

	$(function() {
  		$('#container').smoothState();
	});

	window.onload = function() {
		$("#left").addClass("leftShift");
		$("#right").addClass("rightShift");
		$(".title").addClass("fadeOut");
		setTimeout(function() {window.location.href="design.html";}, 200);
	}
});