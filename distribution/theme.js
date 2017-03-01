$(function() {

  // enable sidebar open/close
	$button = $(".sidebar-toggle");
	$content = $button.attr('data-target');
	$(".sidebar-toggle").click(function(){
		console.log("chamou");
		$($content).toggleClass('active');
	});
});
