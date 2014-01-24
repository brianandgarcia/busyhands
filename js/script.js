$(document).ready(function(){
	var pageWidth = $(window).width();
	if (pageWidth > 800) {
		$('nav.main ul').prepend("<li><a href='_'>Nav</a></li>");
	};
});
